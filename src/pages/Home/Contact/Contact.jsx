import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlineWifiCalling3 } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="hero text-white rounded-[10px] bg-[rgb(7,51,47)] px-4 py-10">
      <div className="hero-content flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
        {/* Left side content */}
        <div className="lg:w-1/2 text-left lg:p-8 md:p-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-[57px] mb-4">Contact With Us!</h1>
          <p className="text-[16px] leading-[26px] text-white text-opacity-70 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <MdOutlineWifiCalling3 className="text-[20px]" />
            <p>+88 01750 14 14 14</p>
          </div>
          <div className="flex items-center space-x-2">
            <LuMapPin className="text-[20px]" />
            <p>Dhanmondi, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Right side form */}
        <div className="lg:w-1/2 w-full lg:mt-0">
          <div className="card shadow-2xl w-full bg-transparent">
            <div className="card-body">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Name</label>
                  <input type="text" className="input w-full bg-[rgba(255,255,255,0.05)] rounded-[10px]" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input type="email" className="input w-full bg-[rgba(255,255,255,0.05)] rounded-[10px]" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="label">Mobile Number</label>
                  <input type="text" className="input w-full bg-[rgba(255,255,255,0.05)] rounded-[10px]" placeholder="Enter mobile number" />
                </div>
                <div>
                  <label className="label">Doctor Name</label>
                  <input type="text" className="input w-full bg-[rgba(255,255,255,0.05)] rounded-[10px]" placeholder="Enter doctor name" />
                </div>
                <div>
                  <label className="label">Date</label>
                  <input type="date" className="input w-full bg-[rgba(255,255,255,0.05)] rounded-[10px]" />
                </div>
                <div>
                  <label className="label">Time</label>
                  <input type="time" className="input w-full bg-[rgba(255,255,255,0.05)] rounded-[10px]" />
                </div>
                <div className="md:col-span-2">
                  <label className="label">Message</label>
                  <textarea className="textarea w-full bg-[rgba(255,255,255,0.05)] rounded-[10px]" placeholder="Type your message here..." rows={4}></textarea>
                </div>
                
                <button className="btn p-7 border-none md:col-span-2 w-full mt-6 text-white font-bold text-[18px] rounded-[10px] bg-[rgb(247,165,130)]">Book Now</button>

                  
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
