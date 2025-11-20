// src/pages/OralMaxillofacialSurgery.tsx
import React from "react";

const OralMaxillofacialSurgery = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        ORAL & MAXILLOFACIAL SURGERY
      </h1>

      {/* Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          At Alva’s Health Centre, the Oral and Maxillofacial Surgery Department provides specialized 
          surgical care for conditions affecting the face, mouth, jaws, and neck. Our team combines 
          advanced surgical techniques with modern technology to ensure the best outcomes for patients.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Offered
        </h2>

        <ul className="list-disc list-inside ml-6 space-y-3 text-gray-700 leading-relaxed tracking-wide">

          <li>Surgical removal of impacted teeth and wisdom teeth</li>
          <li>Management of jaw fractures and facial injuries</li>
          <li>Treatment of oral cysts, tumors, and infections</li>
          <li>Corrective jaw surgery for deformities (orthognathic surgery)</li>
          <li>Management of temporomandibular joint (TMJ) disorders</li>
          <li>Reconstructive surgery for facial defects and trauma</li>
          <li>Supportive surgical care in dental implant placement</li>

        </ul>
      </section>

    </div>
  );
};

export default OralMaxillofacialSurgery;
