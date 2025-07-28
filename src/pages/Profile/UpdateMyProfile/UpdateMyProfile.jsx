import { useForm } from "react-hook-form";
import { FiUpload, FiSave, FiUser, FiCreditCard, FiCalendar, FiPhone, FiDroplet, FiUsers, FiClock } from "react-icons/fi";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaVoicemail } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxios";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMyProfile = () => {
     const [uploadProgress, setUploadProgress] = useState(0);
    const { user, logout } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [previewImage, setPreviewImage] = useState("");
    const [submissionDate, setSubmissionDate] = useState("");

    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors, isSubmitting },
        watch
    } = useForm();

    // Fetch profile for the current user
    useEffect(() => {
        if (user?.email) {
            const fetchProfile = async () => {
                try {
                    const res = await axiosSecure.get('/userprofile');
                    if (res.data) {
                        setProfileData(res.data);
                        setPreviewImage(res.data.profileImage || "");
                        setSubmissionDate(res.data.submissionDate || "");
                        reset({
                            fullName: res.data.fullName,
                            username: res.data.username,
                            email: user.email,
                            nidNumber: res.data.nidNumber,
                            birthDate: res.data.birthDate?.split('T')[0],
                            gender: res.data.gender,
                            contactNumber: res.data.contactNumber,
                            bloodGroup: res.data.bloodGroup,
                            emergencyContactName: res.data.emergencyContactName,
                            emergencyRelationship: res.data.emergencyRelationship,
                            emergencyContactNumber: res.data.emergencyContactNumber
                        });
                    }
                } catch (error) {
                    if (error.response?.status === 401 || error.response?.status === 403) {
                        await logout();
                        navigate('/login');
                    } else if (error.response?.status === 404) {
                        // Profile doesn't exist yet, that's okay
                        reset({
                            email: user.email
                        });
                    }
                    console.error("Failed to fetch profile:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProfile();
        }
    }, [user, axiosSecure, reset, logout, navigate]);

    // Watch for image changes to show preview
    const imageFile = watch("image");
    useEffect(() => {
        if (imageFile && imageFile.length > 0) {
            const file = imageFile[0];
            const reader = new FileReader();
            
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            
            reader.readAsDataURL(file);
        }
    }, [imageFile]);

   const onSubmit = async (data) => {
        try {
            let imageUrl = profileData?.profileImage || previewImage;

            // Upload new image if selected
            if (data.image && data.image.length > 0) {
                const file = data.image[0];
                
                // Validate file size (5MB max)
                if (file.size > 5 * 1024 * 1024) {
                    throw new Error('Image size should be less than 5MB');
                }

                // Validate file type
                if (!file.type.match('image.*')) {
                    throw new Error('Only image files are allowed');
                }

                const formData = new FormData();
                formData.append('image', file);
                
                try {
                    // Use regular axios for ImgBB upload to avoid CORS issues
                    const uploadRes = await axios.post(image_hosting_api, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        onUploadProgress: (progressEvent) => {
                            const percentCompleted = Math.round(
                                (progressEvent.loaded * 100) / progressEvent.total
                            );
                            setUploadProgress(percentCompleted);
                        }
                    });
                    
                    if (uploadRes.data.success) {
                        imageUrl = uploadRes.data.data.display_url;
                    } else {
                        throw new Error('Image upload failed');
                    }
                } catch (uploadError) {
                    console.error('Image upload error:', uploadError);
                    let errorMessage = 'Failed to upload image. Please try again.';
                    if (uploadError.response) {
                        errorMessage = uploadError.response.data?.error?.message || errorMessage;
                    }
                    throw new Error(errorMessage);
                } finally {
                    setUploadProgress(0);
                }
            }

            const profilePayload = {
                fullName: data.fullName,
                username: data.username,
                email: user.email,
                nidNumber: data.nidNumber,
                birthDate: data.birthDate,
                gender: data.gender,
                contactNumber: data.contactNumber,
                bloodGroup: data.bloodGroup,
                emergencyContactName: data.emergencyContactName,
                emergencyRelationship: data.emergencyRelationship,
                emergencyContactNumber: data.emergencyContactNumber,
                profileImage: imageUrl,
                submissionDate: new Date().toISOString()
            };

            // Use axiosSecure for your own API
            const res = await axiosSecure.post('/userprofile', profilePayload);
            
            if (res.data.acknowledged || res.data.modifiedCount > 0 || res.data.insertedId) {
                setProfileData(profilePayload);
                setPreviewImage(imageUrl);
                setSubmissionDate(new Date().toLocaleString());
                
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/myprofile");
            } else {
                throw new Error('Failed to save profile data');
            }
        } catch (error) {
            console.error("Profile update error:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.response?.data?.message || error.message || "Failed to update profile",
            });
        }
    };

    
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 mt-28 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <FiUser className="mr-2" /> {profileData ? 'Update My Profile' : 'Create My Profile'}
                </h2>
                
                {submissionDate && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg flex items-center">
                        <FiClock className="text-blue-500 mr-2" />
                        <span className="text-blue-700">Last updated: {new Date(submissionDate).toLocaleString()}</span>
                    </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Profile Image Upload */}
                    <div className="form-control mb-8 text-center">
                        <label className="label">
                            <span className="label-text font-medium">Profile Photo</span>
                        </label>
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 rounded-full border-4 border-primary overflow-hidden mb-4">
                                <input 
                                    {...register("image")} 
                                    type="file" 
                                    className="hidden" 
                                    id="profileImage"
                                    accept="image/*"
                                />
                                <label htmlFor="profileImage" className="cursor-pointer w-full h-full">
                                    {previewImage ? (
                                        <img 
                                            src={previewImage} 
                                            alt="Profile" 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center">
                                            <FiUpload className="text-3xl text-gray-500 mb-2" />
                                            <span className="text-xs text-gray-500">Upload Photo</span>
                                        </div>
                                    )}
                                </label>
                            </div>
                            <p className="text-sm text-gray-500">Click to change photo</p>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Full Name */}
                     <div className="form-control"> 
    <label className="label"> 
        <span className="label-text font-medium flex items-center"> 
            <FiUser className="mr-2" /> Full Name* 
        </span> 
    </label> 
    <input 
        type="text" 
        placeholder="Your full name" 
        readOnly
        defaultValue={user?.displayName || ""} 
        {...register('fullName', { required: 'Full name is required' })} 
        className="input input-bordered w-full focus:ring-2 focus:ring-primary" 
    /> 
    {errors.fullName && ( 
        <span className="text-red-500 text-sm mt-1">{errors.fullName.message}</span> 
    )} 
</div>


                        {/* Username */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center">
                                    <FiUser className="mr-2" /> Username*
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Username"
                                {...register('username', { required: 'Username is required' })}
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />
                            {errors.username && (
                                <span className="text-red-500 text-sm mt-1">{errors.username.message}</span>
                            )}
                        </div>

                        {/* Email (read-only) */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center">
                                    <FaVoicemail className="mr-2" /> Email*
                                </span>
                            </label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* NID Number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center">
                                    <FiCreditCard className="mr-2" /> NID/Birth Certificate Number*
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="NID or Birth Certificate No"
                                {...register('nidNumber', { 
                                    required: 'NID is required',
                                    pattern: {
                                        value: /^\d{10,17}$/,
                                        message: 'Must be 10-17 digits'
                                    }
                                })}
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />
                            {errors.nidNumber && (
                                <span className="text-red-500 text-sm mt-1">{errors.nidNumber.message}</span>
                            )}
                        </div>

                        {/* Date of Birth */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center">
                                    <FiCalendar className="mr-2" /> Date of Birth*
                                </span>
                            </label>
                            <input
                                type="date"
                                {...register('birthDate', { required: 'Birth date is required' })}
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />
                            {errors.birthDate && (
                                <span className="text-red-500 text-sm mt-1">{errors.birthDate.message}</span>
                            )}
                        </div>

                        {/* Gender */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center">
                                    <FiUser className="mr-2" /> Gender*
                                </span>
                            </label>
                            <select
                                {...register('gender', { required: 'Gender is required' })}
                                className="select select-bordered w-full focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && (
                                <span className="text-red-500 text-sm mt-1">{errors.gender.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Contact Number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center">
                                    <FiPhone className="mr-2" /> Contact Number*
                                </span>
                            </label>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                {...register('contactNumber', { 
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^\+?\d{11,14}$/,
                                        message: 'Valid phone number required'
                                    }
                                })}
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />
                            {errors.contactNumber && (
                                <span className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</span>
                            )}
                        </div>

                        {/* Blood Group */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center">
                                    <FiDroplet className="mr-2" /> Blood Group*
                                </span>
                            </label>
                            <select
                                {...register('bloodGroup', { required: 'Blood group is required' })}
                                className="select select-bordered w-full focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                            {errors.bloodGroup && (
                                <span className="text-red-500 text-sm mt-1">{errors.bloodGroup.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-amber-50 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                            <FiUsers className="mr-2" /> Emergency Contact Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Contact Name*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Emergency contact name"
                                    {...register('emergencyContactName', { required: 'Contact name is required' })}
                                    className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                                />
                                {errors.emergencyContactName && (
                                    <span className="text-red-500 text-sm mt-1">{errors.emergencyContactName.message}</span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Relationship*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Relationship"
                                    {...register('emergencyRelationship', { required: 'Relationship is required' })}
                                    className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                                />
                                {errors.emergencyRelationship && (
                                    <span className="text-red-500 text-sm mt-1">{errors.emergencyRelationship.message}</span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Contact Number*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Emergency phone number"
                                    {...register('emergencyContactNumber', { 
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^\+?\d{11,14}$/,
                                            message: 'Valid phone number required'
                                        }
                                    })}
                                    className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                                />
                                {errors.emergencyContactNumber && (
                                    <span className="text-red-500 text-sm mt-1">{errors.emergencyContactNumber.message}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary text-white px-8"
                        >
                            {isSubmitting ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                <>
                                    <FiSave className="mr-2" /> {profileData ? 'Update Profile' : 'Save Profile'}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyProfile;