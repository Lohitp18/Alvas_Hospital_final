// src/pages/GeneralMedicine.tsx
import React from 'react';
import dhanya from "../../images/dr dhanya.jpg";
import sadanand from "../../images/sadanand.jpg";

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        General Medicine
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
      The General Medicine department at Alva's Health Hospital serves as the cornerstone of our healthcare services, providing comprehensive care for a wide range of medical conditions. Our team of experienced physicians specializes in diagnosing and treating acute and chronic illnesses, ensuring each patient receives personalized and effective treatment plans. We focus on preventive care, health education, and the management of complex medical conditions, emphasizing a holistic approach to patient health. Whether it's a routine check-up or the management of a long-term
 
 health issue, our General Medicine department is dedicated to maintaining and improving the overall well-being of our patients
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
              src={dhanya}
              alt="Dr. Dhanya Alva - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Dhanya Alva
            </h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={sadanand}
              alt="Dr. Sadanand Naik - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Sadanand Naik
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
