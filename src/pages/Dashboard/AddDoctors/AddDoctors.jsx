import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxios";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctors = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                details: data.details,
                available: data.available,
                locationn: data.locationn,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div className="max-w-4xl mx-auto px-4  mt-24 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text font-medium">Doctor Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Doctor Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full focus:ring-2 focus:ring-primary" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Specialization*</span>
                            </label>
                            <select 
                                defaultValue="default" 
                                {...register('category', { required: true })}
                                className="select select-bordered w-full focus:ring-2 focus:ring-primary"
                            >
                                <option disabled value="default">Select a specialization</option>
                                <option value="Cardiology">Cardiology</option>
                                 <option value="Dermatology">Dermatology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Pediatrics">Pediatrics</option>
                                 <option value="Gynecology">Gynecology</option>
                               
                               
                               
                                <option value="Ophthalmology">Ophthalmology</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Consultation Fee*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Fee"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>


                    {/* doctor location */}
                     <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text font-medium">Doctor Location*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Doctor Location"
                            {...register('locationn', { required: true })}
                            required
                            className="input input-bordered w-full focus:ring-2 focus:ring-primary" />
                    </div>


                    {/* Doctor Availability */}
                     <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text font-medium">Doctor Availability*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Doctor Available Time"
                            {...register('available', { required: true })}
                            required
                            className="input input-bordered w-full focus:ring-2 focus:ring-primary" />
                    </div>


                    
                    {/* doctor details */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text font-medium">Doctor Details</span>
                        </label>
                        <textarea 
                            {...register('details')} 
                            className="textarea textarea-bordered h-24 focus:ring-2 focus:ring-primary" 
                            placeholder="Qualifications, experience, etc."
                        ></textarea>
                    </div>

                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text font-medium">Doctor Photo*</span>
                        </label>
                        <input 
                            {...register('image', { required: true })} 
                            type="file" 
                            className="file-input file-input-bordered w-full max-w-xs focus:ring-2 focus:ring-primary" 
                        />
                    </div>

                    <button 
                        type="submit"
                        className="btn btn-primary text-white w-full md:w-auto px-8"
                    >
                        Add Doctor <FaUtensils className="ml-2" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;