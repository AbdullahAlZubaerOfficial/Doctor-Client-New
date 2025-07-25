import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUserMd, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const BookAppointmentHistory = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [filter, setFilter] = useState('all');
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch appointments for the current user
    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            axiosPublic.get(`/appointments`)
                .then(res => {
                    setAppointments(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching appointments:', err);
                    setLoading(false);
                });
        }
    }, [user, axiosPublic]);

    // Filter appointments based on selected filter
    useEffect(() => {
        if (appointments.length > 0) {
            const filtered = appointments.filter(appointment => {
                if (!appointment.appointmentDate) return false;
                
                const now = new Date();
                const appointmentDate = new Date(appointment.appointmentDate);
                
                if (filter === 'upcoming') return appointmentDate >= now;
                if (filter === 'past') return appointmentDate < now;
                return true;
            }).sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));
            
            setFilteredAppointments(filtered);
        } else {
            setFilteredAppointments([]);
        }
    }, [appointments, filter]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/appointment/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // Refresh the appointments list
                            axiosPublic.get(`/appointments/${id}`)
                                .then(res => {
                                    setAppointments(res.data);
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your appointment has been deleted.",
                                        icon: "success"
                                    });
                                });
                        }
                    })
                    .catch(err => {
                        console.error('Delete error:', err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete appointment",
                            icon: "error"
                        });
                    });
            }
        });
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'No date specified';
        try {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        } catch (e) {
            console.error('Date formatting error:', e);
            return dateString;
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="mt-36 mb-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mb-12"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2"
                >
                    My Appointments
                </motion.h1>
                <motion.div 
                    variants={itemVariants}
                    className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"
                ></motion.div>

                <div className="flex flex-col items-center mb-8">
                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            All Appointments
                        </button>
                        <button
                            onClick={() => setFilter('upcoming')}
                            className={`px-4 py-2 rounded-lg ${filter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setFilter('past')}
                            className={`px-4 py-2 rounded-lg ${filter === 'past' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Past
                        </button>
                    </div>
                    <div className="text-sm text-gray-500">
                        Showing {filteredAppointments.length} appointments
                    </div>
                </div>
            </motion.div>

            {filteredAppointments.length === 0 ? (
                <motion.div 
                    variants={itemVariants}
                    className="text-center py-12"
                >
                    <p className="text-gray-500 text-lg">
                        {appointments.length === 0 ? 'You have no appointments yet' : 'No appointments match current filter'}
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredAppointments.map((appointment) => (
                        <motion.div
                            key={appointment._id}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Dr. {appointment.doctorName}
                                    </h3>
                                    <p className="text-blue-600">{appointment.doctorSpecialty}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(appointment._id)}
                                    className="text-red-500 hover:text-red-700 p-2"
                                    title="Delete appointment"
                                >
                                    <MdDelete size={20} />
                                </button>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <FaCalendarAlt className="text-gray-500 mr-3" />
                                    <span className="text-gray-700">
                                        {formatDate(appointment.appointmentDate)}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="text-gray-500 mr-3" />
                                    <span className="text-gray-700">
                                        {appointment.appointmentTime || 'Time not specified'}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FaUser className="text-gray-500 mr-3" />
                                    <span className="text-gray-700">
                                        Patient: {appointment.patientName}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-gray-500 mr-3" />
                                    <span className="text-gray-700">
                                        {appointment.patientPhone}
                                    </span>
                                </div>
                            </div>

                            {appointment.message && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Note:</span> {appointment.message}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default BookAppointmentHistory;

