// src/pages/Neurology.tsx
import React from 'react';
import chaitra from "../../images/Dr. CHAITHRA S P.png";
import ragavendra from "../../images/Dr. RAGHAVENDRA B S.png";
import rakshithkedambody from "../../images/Dr. RAKSHITHA C KEDAMBADY.png";

const Neurology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - NEUROLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Neurology is one of the specialties offered at Alva’s Health Centre. 
          With the support of visiting neurologists and a well-equipped Physiotherapy & Rehabilitation Department, 
          the centre provides essential services for the evaluation and management of neurologic disorders.
        </p>
      </section>

      {/* Feature Table */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Features
        </h2>

        <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide space-y-2">
          <li><strong>Speciality:</strong> Neurology is one of the specialties offered.</li>
          <li><strong>Visiting Neurologists / Consultants:</strong> Includes Dr. Rakshith Kedambady, Dr. Raghavendra B S, and Dr. Suhan Alva.</li>
          <li><strong>Rehabilitation Support:</strong> A well-equipped Physiotherapy & Rehabilitation Department handles neurologic disorders along with orthopedic and other conditions.</li>
        </ul>
      </section>

      {/* Services & Facilities */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services & Facilities
        </h2>

        <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide space-y-2">
          <li>Neurology is one of the departments listed at the centre.</li>
          <li>Physiotherapy & Rehabilitation services tailored for neurologic disorders.</li>
          <li>Pain Clinic services for nerve-related and chronic neurologic pain.</li>
          <li>Diagnostic facilities including CT scan and laboratory services.</li>
          <li>Visiting neurologists available on scheduled days such as Dr. Suhan Alva, Dr. Chaitra, and others.</li>
        </ul>
      </section>

      {/* Strengths */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Strengths of the Neurology Department
        </h2>

        <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide space-y-2">
          <li>In-house physiotherapy & rehabilitation for enhanced neurological recovery.</li>
          <li>Availability of diagnostic imaging (CT scan, lab) crucial for neurological assessment.</li>
          <li>Visiting neurologists provide wider expertise and consultation options.</li>
          <li>Pain Clinic aids in managing chronic neurologic and nerve-related pain.</li>
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
              src={chaitra}
              alt="Dr. Chaitra S P - Neurology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Chaitra S P</h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={ragavendra}
              alt="Dr. Raghavendra B S - Neurology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Raghavendra B S</h3>
          </div>

          {/* Doctor 3 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={rakshithkedambody}
              alt="Dr. Rakshitha C Kedambady - Neurology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Rakshitha C Kedambady</h3>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Neurology;
