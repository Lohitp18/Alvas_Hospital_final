// src/pages/Psychiatry.tsx
import React from 'react';
import anirudh from "../../images/Dr. ANIRUDH SHETTY.png";
import arun from "../../images/Dr. ARUN BHAT.png";

const Psychiatry = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - PSYCHIATRY
      </h1>

      {/* Psychiatry Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          AHC has a dedicated Department of Psychiatry supported by a Clinical Psychology & Counselling Department that provides therapy, 
          psychological assessments, and individualized interventions. The centre also features Alva’s Punarjanma (Prime Centre for Psychological Medicine), 
          launched in January 2020, offering holistic treatment for addiction and mental health conditions using allopathy, Ayurveda, 
          homeopathy, yoga, naturopathy, and family counselling. Additionally, a holistic centre for mental health—Shubhadhama—integrates 
          Ayurveda, yoga, and naturopathy to support overall psychological well-being. Visiting psychiatrists are available regularly as part of the AHC medical team.
        </p>
      </section>

      {/* Psychiatry Department Feature Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Features
        </h2>

        <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide space-y-2">
          <li>AHC has a fully functional Department of Psychiatry.</li>
          <li>Clinical Psychology & Counselling services offering therapy, assessments, and tailored interventions.</li>
          <li>Alva’s Punarjanma: A holistic psychological medicine centre focused on addiction and mental health, combining allopathy, Ayurveda, homeopathy, yoga, naturopathy, and family counselling.</li>
          <li>Shubhadhama: A holistic mental health centre integrating Ayurveda, yoga, and naturopathy for emotional and psychological well-being.</li>
          <li>Visiting psychiatrists available regularly as part of AHC’s range of specialists.</li>
        </ul>
      </section>

      {/* Strengths Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Strengths of Psychiatry at AHC
        </h2>

        <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide space-y-2">
          <li><strong>Multimodal / Holistic Care:</strong> Treatment includes psychiatric care alongside Ayurveda, homeopathy, naturopathy, and yoga.</li>
          <li><strong>De-addiction Services:</strong> Punarjanma centre provides structured addiction treatment backed by therapy and multi-disciplinary care.</li>
          <li><strong>Counselling & Clinical Psychology:</strong> Professional assessments and therapy available on-site.</li>
          <li><strong>Local Accessibility:</strong> Important mental health services available in Moodbidri, reducing travel and cost burden.</li>
          <li><strong>Range of Practitioners:</strong> Availability of visiting psychiatrists and psychology professionals ensures diverse treatment options.</li>
        </ul>
      </section>

      {/* Doctors Section (UNCHANGED) */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center items-center">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={anirudh}
              alt="Dr. Anirudh Shetty - Psychiatry Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Anirudh Shetty</h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={arun}
              alt="Dr. Arun Bhat - Psychiatry Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Arun Bhat</h3>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Psychiatry;
