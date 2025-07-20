import React, { useState } from 'react';

const Details = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Locations', 'Reviews', 'Business Hours'];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium text-sm md:text-base ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'Overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Me Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">About Me</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Education Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-700">American Dental Medical University</h3>
                    <p className="text-gray-600">BDS <span className="text-gray-500">1998 - 2003</span></p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-700">American Dental Medical University</h3>
                    <p className="text-gray-600">MDS <span className="text-gray-500">2003 - 2005</span></p>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Work & Experience</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-700">Glowing Smiles Family Dental Clinic</h3>
                    <p className="text-gray-600">2010 - Present <span className="text-gray-500">(5 years)</span></p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-700">Comfort Care Dental Clinic</h3>
                    <p className="text-gray-600">2007 - 2010 <span className="text-gray-500">(3 years)</span></p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-700">Dream Smile Dental Practice</h3>
                    <p className="text-gray-600">2005 - 2007 <span className="text-gray-500">(2 years)</span></p>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Tooth cleaning',
                    'Root Canal Therapy',
                    'Implants',
                    'Composite Bonding',
                    'Fissure Sealants'
                  ].map((service) => (
                    <div key={service} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Awards Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Awards</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">July 2019 - Humanitarian Award</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">March 2011 - Certificate for International Volunteer Service</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">May 2008 - The Dental Professional of The Year Award</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Specializations Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Specializations</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Children Care',
                    'Dental Care',
                    'Oral and Maxillofacial Surgery',
                    'Orthodontist',
                    'Periodontist',
                    'Prosthodontics'
                  ].map((specialization) => (
                    <span 
                      key={specialization} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {specialization}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Locations' && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Location information will be displayed here.</p>
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Patient reviews will be displayed here.</p>
          </div>
        )}

        {activeTab === 'Business Hours' && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Business hours will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;