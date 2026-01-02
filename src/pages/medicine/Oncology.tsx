// src/pages/Oncology.tsx
import React from 'react';
import noor from "../../images/Dr. NOOR MOHAMMED.png"; // keep image path as is

const Oncology = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        ONCOLOGY & ONCOSURGERY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Oncology & Onco-Surgery Department at Alva’s Health Centre provides comprehensive care for cancer patients. 
        Our team of experienced oncologists and surgeons offers medical, surgical, and supportive treatments tailored to each patient. 
        Utilizing advanced diagnostic tools, targeted therapies, and modern surgical techniques, we aim to ensure optimal outcomes and 
        improve quality of life for individuals facing cancer at any stage. The department emphasizes personalized, compassionate, 
        and multidisciplinary care to support patients and their families throughout treatment and recovery.
      </p>

      {/* Doctors Section */}
      {/* <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap"> */}
          {/* Example Doctor Card (image path kept) */}
          {/* <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={noor}
              alt="Dr. Noor Mohammed - Oncology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Noor Mohammed</h3>
          </div> */}
        {/* </div>
      </section> */}

    </div>
  );
};

export default Oncology;
