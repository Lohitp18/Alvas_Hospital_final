// src/pages/GeneralMedicine.tsx
import React from 'react';
import renaz from "../../images/renaz.jpg"; // Do NOT change this as requested

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        DENTAL SURGERY / DENTAL CARE
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Dental Department at Alva’s Health Centre provides advanced oral healthcare within a 
          multidisciplinary hospital environment. The department plays a vital role in improving 
          overall patient health and wellbeing, complementing other medical specialties with 
          essential diagnostic, preventive, and therapeutic dental services.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        
        {/* Preventive Care */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Offered
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">1. Preventive Dental Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Routine dental check-ups and oral health evaluations</li>
            <li>Professional cleaning and polishing</li>
            <li>Fluoride treatments</li>
            <li>Patient education on oral hygiene and prevention of dental diseases</li>
          </ul>
        </div>

        {/* Restorative Dentistry */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">2. Restorative Dentistry</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Tooth-colored and silver fillings</li>
            <li>Root Canal Treatment (RCT) for infected or damaged teeth</li>
            <li>Crowns, bridges, and other prosthetic restorations</li>
            <li>Restoration of fractured or decayed teeth</li>
          </ul>
        </div>

        {/* Oral Surgery */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">3. Oral Surgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Extraction of deciduous (milk) and permanent teeth</li>
            <li>Surgical removal of wisdom teeth (third molars)</li>
            <li>Impacted tooth surgeries</li>
            <li>Operculectomy and other minor surgical procedures</li>
            <li>Dental implant placement</li>
          </ul>
        </div>

        {/* Periodontal Care */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">4. Periodontal (Gum) Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Treatment for gum disease such as gingivitis and periodontitis</li>
            <li>Supragingival and subgingival scaling</li>
            <li>Deep cleaning and maintenance therapy</li>
          </ul>
        </div>

        {/* Emergency Care */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">5. Emergency Dental Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Management of dental trauma</li>
            <li>Treatment of severe infections</li>
            <li>Control of post-extraction bleeding</li>
            <li>Pain relief and urgent interventions</li>
          </ul>
        </div>

        {/* Specialized Care */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">6. Specialized Dental Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Dental care for patients with complex medical needs</li>
            <li>Hospital-based dental treatment for high-risk individuals</li>
            <li>Multi-specialty collaboration for comprehensive care</li>
          </ul>
        </div>

        {/* Orthodontics */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">7. Orthodontic Services</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Braces: metal, ceramic, lingual</li>
            <li>Clear aligners (Invisalign)</li>
            <li>Retainers and bite correction appliances</li>
            <li>Diagnosis and treatment of malocclusion and jaw alignment issues</li>
          </ul>
        </div>

      </section>

      {/* DO NOT MODIFY THIS SECTION */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>
        <div className="flex justify-center items-center">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={renaz}
              alt="renaz - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xxx font-bold text-blue-800 mt-4">Dr. Renaz</h3>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GeneralMedicine;
