// src/pages/Psychiatry.tsx
import React from 'react';
import anirudh from "../../images/Dr. ANIRUDH SHETTY.png";
import prajakta from "../../images/dr prajakta.jpeg";

const Psychiatry = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        PSYCHIATRY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        AHC has a dedicated Department of Psychiatry supported by a Clinical Psychology & Counselling Department that provides therapy, 
        psychological assessments, and individualized interventions. The centre also features Alva’s Punarjanma (Prime Centre for Psychological Medicine), 
        launched in January 2020, offering holistic treatment for addiction and mental health conditions using allopathy, Ayurveda, 
        homeopathy, yoga, naturopathy, and family counselling. Additionally, a holistic centre for mental health—Shubhadhama—integrates 
        Ayurveda, yoga, and naturopathy to support overall psychological well-being. Visiting psychiatrists are available regularly as part of the AHC medical team.
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
              src={anirudh}
              alt="Dr. Anirudh Shetty - Psychiatry Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Anirudh Shetty
            </h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={prajakta}
              alt="Dr. Prajakta V Rao - Psychiatry Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Prajakta V Rao
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Psychiatry;
