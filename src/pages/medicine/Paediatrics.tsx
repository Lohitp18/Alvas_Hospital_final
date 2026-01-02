// src/pages/GeneralMedicine.tsx  (Rename if needed)
import React from 'react';
import vasanth from "../../images/vasanth.jpg";

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        PEDIATRICS
      </h1>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Pediatrics department is dedicated to providing comprehensive healthcare for infants,
        children, and adolescents. Our team of pediatricians specializes in diagnosing and treating
        a wide range of childhood illnesses and developmental issues, from routine check-ups to
        complex medical conditions. We focus on promoting healthy growth and development through
        preventive care, vaccinations, and personalized treatment plans. With a child-friendly
        approach and family-centered care, our Pediatrics department ensures that young patients
        receive compassionate and expert care at every stage of their development.
      </p>

      {/* DO NOT MODIFY — Doctor Images Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center items-center space-x-6">
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={vasanth}
              alt="Dr. Vasanth T - Paediatrics Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Vasanth T
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
