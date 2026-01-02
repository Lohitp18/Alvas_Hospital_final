// src/pages/GeneralSurgery.tsx
import React from 'react';
import vinay from "../../images/vinay alva.jpg"; // Update with the correct image path

const GeneralSurgery = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        GENERAL, ENDOSCOPIC & LAPAROSCOPIC SURGERY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        At Alva’s Health Centre, our General, Endoscopic, and Laparoscopic Surgery Department provides 
        advanced surgical care with a focus on patient safety, comfort, and faster recovery.
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
              src={vinay} // Use the correct image path
              alt="Dr. Vinay Alva - General Surgery Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Vinay Alva
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralSurgery;
