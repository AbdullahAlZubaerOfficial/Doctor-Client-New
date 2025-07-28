import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiEdit2, FiUser, FiCreditCard, FiCalendar, FiPhone, FiDroplet, FiUsers } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
// import LoadingSpinner from '../../components/LoadingSpinner';
import useAxiosSecure from '../../hooks/useAxios';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const MyProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (user?.email) {
          const res = await axiosSecure.get('/userprofile');
          setProfileData(res.data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

    // Check for mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [user, axiosSecure]);

  const ProfileField = ({ label, name, value, icon, type = 'text' }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
          <span className="mr-2 text-indigo-600">{icon}</span>
          {label}
        </label>
        <div className="px-3 py-2 bg-gray-50 rounded-md border border-transparent">
          {value || <span className="text-gray-400">Not provided</span>}
        </div>
      </div>
    );
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br mt-28 from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Personal Profile
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            View your profile information
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          {/* Profile Header with Image */}
          <div className="bg-indigo-600 p-6 text-white">
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  {profileData?.profileImage ? (
                    <img 
                      src={profileData.profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full bg-indigo-400 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {profileData?.fullName ? profileData.fullName.charAt(0) : '?'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-center">
                {profileData?.fullName || 'Your Name'}
              </h2>
            </div>
          </div>

          {profileData?.submissionDate && (
            <div className="px-6 py-3 bg-blue-50 text-blue-700 text-sm flex items-center">
              <span>Last updated: {new Date(profileData.submissionDate).toLocaleString()}</span>
            </div>
          )}

          {/* Profile Sections */}
          <div className="p-6 space-y-6">
            {/* Personal Information */}
            <motion.div 
              whileHover={!isMobile ? { scale: 1.01 } : {}}
              className="bg-gray-50 p-5 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-4 border-b pb-2 flex items-center">
                <FiUser className="mr-2" /> Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProfileField  
                  label="Full Name" 
                  name="fullName" 
                  value={profileData?.fullName} 
                  icon={<FiUser />} 
                />
                <ProfileField  
                  label="Username" 
                  name="username" 
                  value={profileData?.username} 
                  icon={<FiUser />} 
                />
                <ProfileField  
                  label="NID/Birth Certificate Number" 
                  name="nidNumber" 
                  value={profileData?.nidNumber} 
                  icon={<FiCreditCard />} 
                />
                <ProfileField  
                  label="Date of Birth" 
                  name="birthDate" 
                  value={profileData?.birthDate ? new Date(profileData.birthDate).toLocaleDateString() : ''} 
                  icon={<FiCalendar />} 
                  type="date" 
                />
                <ProfileField  
                  label="Gender" 
                  name="gender" 
                  value={profileData?.gender} 
                  icon={<FiUser />} 
                />
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              whileHover={!isMobile ? { scale: 1.01 } : {}}
              className="bg-gray-50 p-5 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-4 border-b pb-2 flex items-center">
                <FiPhone className="mr-2" /> Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProfileField  
                  label="Email" 
                  name="email" 
                  value={profileData?.email || user?.email} 
                  icon={<FiUser />} 
                />
                <ProfileField  
                  label="Contact Number" 
                  name="contactNumber" 
                  value={profileData?.contactNumber} 
                  icon={<FiPhone />} 
                  type="tel" 
                />
                <ProfileField  
                  label="Blood Group" 
                  name="bloodGroup" 
                  value={profileData?.bloodGroup} 
                  icon={<FiDroplet />} 
                />
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div 
              whileHover={!isMobile ? { scale: 1.01 } : {}}
              className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-amber-700 mb-4 border-b pb-2 flex items-center">
                <FiUsers className="mr-2" /> Emergency Contact Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProfileField  
                  label="Contact Name" 
                  name="emergencyContactName" 
                  value={profileData?.emergencyContactName} 
                  icon={<FiUser />} 
                />
                <ProfileField  
                  label="Relationship" 
                  name="emergencyRelationship" 
                  value={profileData?.emergencyRelationship} 
                  icon={<FiUsers />} 
                />
                <ProfileField  
                  label="Contact Number" 
                  name="emergencyContactNumber" 
                  value={profileData?.emergencyContactNumber} 
                  icon={<FiPhone />} 
                  type="tel" 
                />
              </div>
            </motion.div>
          </div>

          {/* Action Button */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end">
<Link to={`/updateprofile/${user?.displayName?.replace(/\s+/g, "-").toLowerCase() || user?.email}`}>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow"
  >
    <FiEdit2 className="mr-2" /> Edit Profile
  </motion.button>
</Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MyProfile;