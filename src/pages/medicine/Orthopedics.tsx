// src/pages/GeneralMedicine.tsx   → (You may rename to Orthopedics.tsx)
import React from 'react';
import sachin from "../../images/sachin.jpg";
import arjun from "../../images/Dr. ARJUN BALLAL.png";

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      <h2 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW – ORTHOPEDICS & TRAUMA
      </h2>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
          The Orthopedics & Trauma Department at Alva’s Health Centre provides comprehensive care 
          for bone, joint, muscle, ligament, and spine-related conditions. The department is equipped 
          with advanced diagnostic tools, major and minor operation theatres, emergency trauma care, 
          and a full-fledged physiotherapy & rehabilitation unit. With a focus on rapid recovery, 
          accurate diagnosis, and expert surgical and non-surgical treatment, AHC ensures complete 
          orthopedic care under one roof.
        </p>
      </section>

      {/* Key Features */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Key Features</h3>

        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Orthopedic & Trauma Surgery for fractures, injuries, and musculoskeletal disorders</li>
          <li>Major & Minor Operation Theatres for advanced orthopedic procedures</li>
          <li>Full Rehabilitation & Physiotherapy Department for post-surgical and injury recovery</li>
          <li>Emergency & Trauma Unit to handle acute accidents and critical orthopedic cases</li>
          <li>Pain Clinic support for chronic joint pain, back pain, and musculoskeletal discomfort</li>
          <li>Arthroscopic and arthroplasty (joint replacement) procedures available</li>
          <li>Imaging support: X-ray, CT scan for accurate diagnosis and treatment planning</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Services Offered</h3>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-2">Orthopedic Trauma Care</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
            <li>Fracture management (simple, complex, open fractures)</li>
            <li>Dislocation and acute injury treatment</li>
            <li>Accident & emergency orthopedic interventions</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-2">General Orthopedic Treatments</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
            <li>Arthritis management (osteoarthritis, rheumatoid arthritis)</li>
            <li>Back & spine disorders (disc problems, spinal injuries)</li>
            <li>Sports injuries (ligament tears, muscle strains, meniscus injuries)</li>
            <li>Congenital deformity correction</li>
            <li>Joint and cartilage disorders</li>
            <li>Osteoporosis & bone health management</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-2">Advanced Surgical Procedures</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
            <li>Arthroscopic (keyhole) surgeries</li>
            <li>Joint replacement (hip, knee, shoulder) – arthroplasty</li>
            <li>Fracture fixation with plates, screws, rods</li>
            <li>Spine surgeries (discectomy, decompression, fusion)</li>
            <li>Corrective surgeries for orthopedic deformities</li>
            <li>Treatment for bone & soft tissue tumors</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-blue-500 mb-2">Rehabilitation & Physiotherapy</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
            <li>Post-surgical physiotherapy and structured rehab plans</li>
            <li>Sports rehabilitation</li>
            <li>Chronic pain management through physiotherapy</li>
            <li>Fall prevention & osteoporosis care</li>
          </ul>
        </div>
      </section>

      {/* Doctors Section – UNCHANGED */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center items-center">
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={sachin}
              alt="sachin - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Sachin Shetty</h3>
          </div>

          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={arjun}
              alt="arjun - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Arjun Ballal</h3>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GeneralMedicine;
