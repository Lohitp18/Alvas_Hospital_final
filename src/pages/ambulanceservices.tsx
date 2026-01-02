import React from 'react';
import { Ambulance } from 'lucide-react';

// Import ambulance images
import AmbulanceImg1 from '../images/ambulance1.jpeg';
import AmbulanceImg2 from '../images/ambulance2.jpeg';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Ambulance Services Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700 p-10 backdrop-blur-md">
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <Ambulance className="w-8 h-8 text-blue-900 dark:text-blue-400" />
              <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">
                24×7 Ambulance Services
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our hospital provides <strong>24×7 ambulance services</strong> to ensure immediate medical assistance during emergencies.
              Our ambulances are fully equipped with essential life-saving equipment and are staffed by trained paramedics
              to provide safe and timely patient care.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              We are always prepared to respond quickly to accidents, medical emergencies,
              and critical patient transfers.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              We are committed to delivering fast, reliable, and compassionate emergency transportation at all times,
              including nights, weekends, and holidays.
              With a strong focus on patient safety and prompt response,
              our ambulance service plays a vital role in ensuring continuous emergency care
              from the moment help is needed until the patient reaches the hospital.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <img
              src={AmbulanceImg1}
              alt="Hospital Ambulance Service"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <img
              src={AmbulanceImg2}
              alt="Emergency Medical Transport"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
