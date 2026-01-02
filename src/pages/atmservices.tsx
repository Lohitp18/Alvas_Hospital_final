import React from 'react';
import { Info, ShieldCheck } from 'lucide-react';
import Atm3 from '../images/atm3.jpg';


const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ATM Facility Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700 p-10 backdrop-blur-md">
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <Info className="w-8 h-8 text-blue-900 dark:text-blue-400" />
              <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">
                ATM Facility
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our hospital provides an <strong>on-site ATM facility</strong> for the convenience of patients,
              visitors, and staff. The ATM is available within the hospital premises,
              allowing easy and secure access to cash at any time.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              This service helps visitors manage medical expenses and personal needs
              without having to leave the hospital, ensuring a more comfortable
              and hassle-free experience during their visit.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
  <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full md:w-1/2">
    <img
      src={Atm3}
      alt="Hospital ATM Facility"
      className="w-full h-100 object-cover transition-transform duration-300 hover:scale-105"
      loading="lazy"
    />
  </div>
</div>



      </div>
    </div>
  );
};

export default About;
