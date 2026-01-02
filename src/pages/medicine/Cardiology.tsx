// src/pages/Cardiology.tsx
import React from "react";
import dithesh from "../../images/Dr. DITHESH M.png";

const Cardiology = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        CARDIOLOGY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Cardiology Department specializes in the diagnosis, treatment, and
        management of heart-related conditions. Our expert cardiologists provide
        comprehensive care for a wide range of cardiovascular issues, including
        coronary artery disease, heart failure, arrhythmias, and hypertension.
        Using advanced diagnostic tools and treatment options such as
        echocardiograms and stress tests, we focus on ensuring optimal heart
        health. Whether preventive care, medical management, or interventional
        procedures, our Cardiology team is dedicated to delivering expert,
        patient-centered care to improve cardiovascular health and well-being.
      </p>

     {/* CATH - LAB Card */}
{/* CATH - LAB Card */}
<section className="bg-blue-50 p-6 rounded-lg shadow-lg mb-8 max-w-sm mx-auto border border-blue-200">
  <h2 className="text-xl font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-1 text-center">
    Strengthened with Advanced <br /> CATH - LAB
  </h2>

  <h3 className="text-lg font-semibold text-blue-600 mb-2 text-center">
    Our Cardiac Services
  </h3>

  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>Angiogram</li>
    <li>Angioplasty</li>
    <li>Pacemaker</li>
    <li>Peripheral Angiogram</li>
    <li>Treadmill Test (TMT)</li>
    <li>IVUS & OCT Guided Angioplasty</li>
    <li>Echocardiography (2D)</li>
  </ul>
</section>



      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={dithesh}
              alt="Dr. Dithesh M - Cardiology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Dithesh M
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardiology;
