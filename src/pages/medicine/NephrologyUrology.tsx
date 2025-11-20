// src/pages/NephrologyUrology.tsx
import React from 'react';
import bhushan from "../../images/Dr.Bhushan c shetty.png"; // image remains the same

const NephrologyUrology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">

      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        NEPHROLOGY & UROLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre offers comprehensive nephrology and urology services. 
          Our team provides expert care for kidney disorders, urinary tract conditions, and related health issues, combining medical management, surgical intervention, and dialysis support for optimal patient outcomes.
        </p>
      </section>

      {/* Nephrology Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Department of Nephrology
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-4">
          The Nephrology Department focuses on the diagnosis, treatment, and prevention of kidney diseases. 
          The 24/7 dialysis unit ensures continuous renal replacement therapy for patients with acute or chronic kidney failure.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Core Services</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Medical management of chronic kidney disease (CKD), acute kidney injury (AKI), hypertension, and electrolyte imbalances</li>
          <li>Dialysis services: Hemodialysis, peritoneal dialysis, and emergency dialysis</li>
          <li>Renal replacement therapy including CRRT, plasmapheresis, and hemoperfusion</li>
          <li>Kidney biopsy & diagnostics: Evaluation of glomerular and interstitial diseases</li>
          <li>Preventive and pediatric nephrology services</li>
        </ul>
      </section>

      {/* Urology Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Department of Urology
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-4">
          The Urology Department provides advanced care for urinary tract disorders, male reproductive health, and kidney stone management.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Services Offered</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Kidney stone management: ESWL, RIRS, PCNL</li>
          <li>Benign Prostatic Hyperplasia (BPH) management and surgeries</li>
          <li>Hydrocele treatment including surgical correction</li>
          <li>Circumcision procedures (traditional & stapler methods)</li>
          <li>Other urological surgeries: Balanitis, frenuloplasty, and urinary tract interventions</li>
        </ul>
      </section>

      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center items-center">
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={bhushan}
              alt="bhushan - Nephrology & Urology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xxx font-bold text-blue-800 mt-4">Dr. Bhushan C Shetty</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NephrologyUrology;
