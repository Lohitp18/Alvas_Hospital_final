// src/pages/GeneralMedicine.tsx
import React from 'react';
import thilak from "../../images/thilak.jpg";

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">RADIOLOGY</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
      The Radiodiagnosis department focuses on providing accurate diagnostic imaging services to support the evaluation and management of various medical conditions. Utilizing advanced imaging technologies such as X-rays, CT scans, and MRIs, our team of radiologists captures detailed internal images to help diagnose and monitor health issues. Our expert radiologists analyze these images to provide precise diagnostic insights, guiding treatment decisions and improving patient outcomes. With a commitment to high-quality imaging and interpretation, our Radiodiagnosis department plays a crucial role in effective and timely medical care.      </p>

      

      <section className="bg-white p-6 rounded-lg shadow-sm mt-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>
        <div className="flex justify-center items-center">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={thilak} // Image section remains unchanged
              alt="thilak - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xxx font-bold text-blue-800 mt-4">Dr. Thilak Shetty</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
