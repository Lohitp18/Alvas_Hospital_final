// src/pages/Neurosurgery.tsx
import React from "react";

const Neurosurgery = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        NEUROSURGERY
      </h1>

      {/* Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Neurosurgery Department at Alva’s Health Centre offers advanced surgical care for disorders 
          of the brain, spine, and nervous system. Our team of skilled neurosurgeons uses modern techniques 
          and state-of-the-art facilities to provide safe and effective treatment.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Offered
        </h2>

        <ul className="list-disc list-inside ml-6 space-y-3 text-gray-700 leading-relaxed tracking-wide">

          <li>Brain surgeries for tumors, trauma, aneurysms, and congenital conditions</li>
          <li>Spine surgeries for disc problems, spinal cord injuries, and deformities</li>
          <li>Surgical management of head injuries and neurological emergencies</li>
          <li>Treatment of nerve-related disorders such as trigeminal neuralgia and peripheral nerve injuries</li>
          <li>Minimally invasive neurosurgical procedures for faster recovery</li>

        </ul>
      </section>

      {/* Closing Note */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          With a strong focus on precision, patient safety, and faster rehabilitation, the Neurosurgery 
          Department ensures comprehensive care for both emergency and planned neurosurgical needs.
        </p>
      </section>

    </div>
  );
};

export default Neurosurgery;
