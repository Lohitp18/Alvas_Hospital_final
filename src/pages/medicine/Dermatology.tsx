// src/pages/Dermatology.tsx
import React from 'react';
import anchitha from "../../images/dr anchitha.webp";
import nihal from "../../images/Dr. NIHAL XAVIER PINTO.png";

const Dermatology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <h1 className="text-4xl font-extrabold text-blue-700 border-b-4 border-blue-500 pb-3 mb-6">
        OVERVIEW - DERMATOLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Dermatology is one of the specialties offered at Alva’s Health Centre. 
          The hospital includes general and cosmetic dermatology under its range of services. 
          Through its Aesthetic Rejuvenation Centre, there are dermal, skincare, and cosmetic procedures available.
        </p>
      </section>

      {/* Services & Facilities */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services & Facilities
        </h2>

        <ul className="list-disc list-inside ml-6 space-y-3 text-gray-700 leading-relaxed tracking-wide">
          <li>
            Dermatology is one of the specialties offered at Alva’s Health Centre.
          </li>
          <li>
            General and cosmetic dermatology services are available, including skincare and aesthetic procedures through the 
            Aesthetic Rejuvenation Centre.
          </li>
          <li>
            Typical dermatology services include diagnosis and treatment of common skin conditions such as acne, eczema, fungal infections, 
            and other dermatological concerns.
          </li>
        </ul>
      </section>

      {/* Availability */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Doctor Availability
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">Dr. Nihal</h3>
            <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
              <li>Available on Monday and Tuesday from 4:15 PM to 5:00 PM</li>
              <li>Available on Friday from 1:00 PM to 2:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">Dr. Anchitha</h3>
            <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
              <li>Available on 13th, 20th, 27th, and 30th of every month from 12:00 PM</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center items-center space-x-6">

          {/* Doctor 1 (unchanged — as requested) */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={anchitha}
              alt="Dr. Anchitha - Dermatologist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Anchitha</h3>
          </div>

          {/* Doctor 2 (unchanged — as requested) */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={nihal}
              alt="Dr. Nihal Xavier Pinto - Dermatologist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Nihal Xavier Pinto</h3>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Dermatology;
