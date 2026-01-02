// src/pages/Orthopedics.tsx
import React from 'react';
import sachin from "../../images/sachin.jpg";

const Orthopedics = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        ORTHOPEDICS & TRAUMA
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Orthopedics & Trauma Department at Alva’s Health Centre provides comprehensive care 
        for bone, joint, muscle, ligament, and spine-related conditions. The department is equipped 
        with advanced diagnostic tools, major and minor operation theatres, emergency trauma care, 
        and a full-fledged physiotherapy & rehabilitation unit. With a focus on rapid recovery, 
        accurate diagnosis, and expert surgical and non-surgical treatment, AHC ensures complete 
        orthopedic care under one roof.
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
              src={sachin}
              alt="Dr. Sachin Shetty - Orthopedics Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Sachin Shetty</h3>
          </div>

          {/* Add more doctors here if needed */}
        </div>
      </section>
    </div>
  );
};

export default Orthopedics;
