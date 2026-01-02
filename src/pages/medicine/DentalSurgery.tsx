// src/pages/GeneralMedicine.tsx
import React from 'react';
import renaz from "../../images/renaz.jpg"; // Do NOT change this

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        DENTAL SURGERY / DENTAL CARE
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Dental Department at Alva’s Health Centre provides advanced oral healthcare within a 
        multidisciplinary hospital environment. The department plays a vital role in improving 
        overall patient health and wellbeing, complementing other medical specialties with 
        essential diagnostic, preventive, and therapeutic dental services. We emphasize patient-centered 
        care, modern treatment techniques, and maintaining optimal oral health for all age groups.
      </p>

      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={renaz}
              alt="Dr. Renaz - Dental Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Renaz</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
