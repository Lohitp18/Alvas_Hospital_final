// src/pages/Neurology.tsx
import React from 'react';
import chaitra from "../../images/Dr. CHAITHRA S P.png";
import ragavendra from "../../images/Dr. RAGHAVENDRA B S.png";
import rakshithkedambody from "../../images/Dr. RAKSHITHA C KEDAMBADY.png";

const Neurology = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        NEUROLOGY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        Neurology is one of the specialties offered at Alva’s Health Centre.
        With the support of visiting neurologists and a well-equipped
        Physiotherapy & Rehabilitation Department, the centre provides
        essential services for the evaluation and management of neurologic
        disorders.
      </p>

      {/* Doctors Section */}
      {/* <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          
        </div>
      </section> */}
    </div>
  );
};

export default Neurology;
