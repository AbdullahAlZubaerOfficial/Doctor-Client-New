import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BookAnAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5100/menu/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const bookAppointmentItem = {
        doctorId: id,
        doctorName: doctor?.name,
        doctorSpecialty: doctor?.category,
        patientName: data.name,
        patientAge: data.age,
        patientPhone: data.phone,
        appointmentDate: data.date,
        appointmentTime: data.time,
        message: data.message,
        // Email comes from backend via token
      };

      const bookAppointmentRes = await axiosPublic.post(
        "/appointments",
        bookAppointmentItem
      );

      if (bookAppointmentRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Appointment booked successfully with Dr. ${doctor?.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/appointment");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        html: `<span style="color: red; font-size: 18px;">${
          error.response?.data?.error || "You are not Logged In 😥"
        }</span>`,
        showCancelButton: true,
        confirmButtonText: "Go to Login 🔐",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } finally {
      setIsSubmitting(false);
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

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.3)",
    },
    tap: {
      scale: 0.98,
    },
  };

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
          Book an Appointment
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-blue-500 mx-auto rounded-full"
        ></motion.div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Doctor Profile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-2/5"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-20 h-20 rounded-full overflow-hidden mr-6"
                >
                  <img
                    src={doctor?.image}
                    alt={doctor?.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EDR%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {doctor?.name}
                  </h3>
                  <p className="text-gray-600">{doctor?.category}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-400 mr-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    <span>☆</span>
                  </div>
                  <span className="text-gray-600 text-sm">(35 reviews)</span>
                </div>
                <div className="flex items-start mb-4">
                  <span className="text-gray-500 mr-2 mt-1">📍</span>
                  <p className="text-gray-600">{doctor?.locationn}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Specializations:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Dentistry", "Cosmetic", "Implants", "Orthodontics"].map(
                      (spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                          {spec}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Appointment Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="w-full lg:w-3/5"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Appointment Details
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Age
                  </label>
                  <input
                    {...register("age", { required: true })}
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="22"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="tested@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="+1 234 567 890"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Appointment Date
                  </label>
                  <input
                    {...register("date", { required: true })}
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    {...register("time", { required: true })}
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants} className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Patient Problems
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    {...register("message", { required: true })}
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="What is the type of problem of patient..."
                  ></textarea>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8">
                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                    isSubmitting
                      ? "bg-blue-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Book Appointment Now"
                  )}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookAnAppointment;
