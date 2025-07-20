import React from 'react'
import img1 from '../../../public/doc14.png'

const DoctorProfileCard = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 mb-10 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
      {/* Left: Image Section - Now fully responsive */}
      <div className="w-full lg:w-1/4 xl:w-1/5 bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-0">
        <div className="relative w-full max-w-xs">
          {/* Responsive image container with aspect ratio */}
          <div className="pb-[100%] relative rounded-full overflow-hidden shadow-md">
            <img 
              src={img1}
              alt="Dr. Ruby Perrin"
              className="absolute h-full w-full object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EDR%3C/text%3E%3C/svg%3E"
              }}
            />
          </div>
          {/* Online status indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Right: Info Section */}
      <div className="w-full lg:w-3/4 xl:w-4/5 p-6 lg:p-8">
        {/* Name and Rating */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Dr. Ruby Perrin</h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">MBBS, MD - General Medicine</p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center mt-3 lg:mt-0">
            <div className="flex text-orange-400 text-base md:text-lg">
              {'★'.repeat(4)}
              {'☆'}
            </div>
            <span className="ml-2 text-sm md:text-base text-gray-600">(35 reviews)</span>
          </div>
        </div>

        {/* Location */}
        <div className="text-sm md:text-base text-gray-600 mt-3 md:mt-4 flex items-start">
          <span className="inline-block mr-2 mt-1">📍</span>
          <div>
            <p>Dhanmondi, Dhaka, Bangladesh</p>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium mt-1 inline-block transition-colors">
              Get Directions →
            </a>
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-4 md:mt-6">
          <h3 className="text-sm md:text-base font-semibold text-gray-700 mb-2">Specializations:</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['Dentistry', 'Cosmetic', 'Implants', 'Orthodontics', 'Whitening'].map((service, i) => (
              <div key={i} className="flex items-center px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">{i+1}</span>
                </div>
                <span className="text-xs md:text-sm text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Available Services */}
        <div className="mt-6 md:mt-8">
          <h3 className="text-sm md:text-base font-semibold text-gray-700 mb-2">Available Services:</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              Dental Filling
            </button>
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              Teeth Whitening
            </button>
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              Root Canal
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full sm:w-auto mt-6 md:mt-8 px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors transform hover:scale-[1.02]">
          Book Appointment
        </button>
      </div>
    </div>
  )
}

export default DoctorProfileCard