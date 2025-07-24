import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { MdAttachMoney } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxios';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import { FaExplosion } from 'react-icons/fa6';

const DoctorCardd = ({ item }) => {
  const { name, image, price, specialist,recipe, locationn,category,details, available, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

//   const handleAddToCart = () => {
//     if (user && user.email) {
//       const cartItem = { menuId: _id, email: user.email, name,recipe, image, price,category, details, specialist, locationn, available };

//       axiosSecure.post('/carts', cartItem)
//         .then(res => {
//           if (res.data.insertedId) {
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: `${name} added to your cart 🛒`,
//               showConfirmButton: false,
//               timer: 1500
//             });
//             refetch();
//           }
//         })
//         .catch(error => {
//           console.error('Error adding to cart:', error);
//           Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
//         });
//     } else {
//       Swal.fire({
//         title: "You are not Logged In",
//         text: "Please login to add to the cart?",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, login!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate('/login', { state: { from: location } });
//         }
//       });
//     }
//   };

  return (
    <motion.div
      className="card bg-white shadow-md rounded-xl overflow-hidden border border-gray-100"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.figure className="relative h-64 overflow-hidden">
        <img src={image} className="w-full h-full object-cover rounded-t-xl" alt={name} />
        <motion.div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center">
          <MdAttachMoney className="text-[#f7a582] mr-1" />
          <span className="font-medium">{price}</span>
        </motion.div>
      </motion.figure>

      <div className="card-body p-6">
        <h2 className="card-title text-2xl mb-1">{name}</h2>
        <p className="text-gray-500 mb-4">{category}</p>

        <div className="flex gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <input key={i} type="radio" className="mask mask-star-2 bg-orange-400" readOnly checked={i < 4} />
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaExplosion className="text-[#f7a582] text-xl mt-1" />
            <p className="text-gray-600">{details}</p>
          </div>
          <div className="flex items-start gap-3">
            <FiMapPin className="text-[#f7a582] text-xl mt-1" />
            <p className="text-gray-600">{locationn}</p>
          </div>
          <div className="flex items-start gap-3">
            <SlCalender className="text-[#f7a582] text-xl mt-1" />
            <p className="text-gray-600">{available}</p>
          </div>
        </div>

        <div className="mt-4">
          {/* <button
            onClick={()=> navigate(`/doctor/${_id}`)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 w-full py-3"
          >
            View Details
          </button>    */}

            <motion.button 
                                className="btn mt-6 py-4 px-8 border-2 border-[#f7a582] text-[#f7a582] hover:bg-[#f7a582] hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={()=> navigate(`/doctor/${_id}`)}
                            >
                              View Profile
                            </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCardd;
