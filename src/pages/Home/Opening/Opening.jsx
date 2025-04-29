import React from 'react';
import { FaClock, FaMap, FaPhone, FaRing } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const Opening = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center'>
            <div className='rounded-lg bg-[rgb(7,51,47)] flex flex-col justify-center items-center space-y-4 h-[202px] w-[364px]'>
                <div className='text-white text-[37.5px]'>
                    <FaClock />
                </div>
                <div className='text-white text-left'>
                    <h1 className='font-bold text-2xl'>Opening Hours</h1>
                    <p className='mt-3 text-slate-300'>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='rounded-lg bg-[rgb(247,165,130)] flex flex-col p-10 justify-center items-center space-y-4 h-[202px] w-[364px]'>
                <div className='text-white text-[37.5px] '>
                   <FaMapLocation></FaMapLocation>
                </div>
                <div className='text-white text-left'>
                    <h1 className='font-bold text-2xl'>Our Locations</h1>
                    <p className='mt-3 text-white'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='rounded-lg bg-[rgb(7,51,47)] flex flex-col justify-center items-center space-y-4 h-[202px] w-[364px]'>
                <div className='text-white text-[37.5px] '>
                     <FaPhone></FaPhone>
                </div>
                <div className='text-white text-left'>

                    <h1 className='font-bold text-2xl'>Contact Us</h1>
                    <p className='mt-3 text-slate-300'>+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default Opening;
