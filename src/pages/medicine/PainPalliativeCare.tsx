// src/pages/PainManagement.tsx
import React from 'react';
// import doctor from "../../images/doctor.jpg"; // Replace with actual doctor image

const PainManagement = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        PAIN MANAGEMENT & PALLIATIVE CARE
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        At Alva’s Health Centre, we understand that managing pain and improving quality of life are essential parts of comprehensive patient care. 
        Our Pain Management & Palliative Care Department provides compassionate, multidisciplinary support for patients suffering from chronic pain, 
        terminal illnesses, or life-limiting conditions.
      </p>

      {/* Doctors Section */}
      {/* <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap"> */}
          {/* Example Doctor Card */}
          {/* <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={doctor} // Replace with the actual doctor image
              alt="Pain Management Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. [Name]</h3>
          </div> */}
        {/* </div>
      </section> */}

    </div>
  );
};

export default PainManagement;
