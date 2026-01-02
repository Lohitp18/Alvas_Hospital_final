// src/pages/Dermatology.tsx
import React from 'react';

const Dermatology = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        DERMATOLOGY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        Dermatology is one of the specialties offered at Alva’s Health Centre.
        The department provides comprehensive care for skin, hair, and nail
        conditions, including both medical and cosmetic dermatology services.
        Through the Aesthetic Rejuvenation Centre, a wide range of dermal,
        skincare, and cosmetic procedures are available. The department is
        committed to accurate diagnosis, effective treatment, and personalized
        care to promote healthy and confident living.
      </p>

      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          {/* Doctors will be added here */}
        </div>
      </section>
    </div>
  );
};

export default Dermatology;
