// src/pages/NephrologyUrology.tsx
import React from 'react';
import bhushan from "../../images/Dr.Bhushan c shetty.png"; // image remains the same

const NephrologyUrology = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        NEPHROLOGY & UROLOGY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Nephrology & Urology Department at Alva’s Health Centre provides comprehensive care for kidney and urinary tract conditions. 
        Our team of expert nephrologists and urologists manages chronic kidney disease, kidney stones, hypertension, urinary infections, 
        prostate disorders, and bladder conditions. With advanced diagnostic tools, dialysis support, minimally invasive surgeries, and 
        personalized treatment plans, we aim to maintain kidney health, restore urinary function, and improve the overall quality of life 
        for our patients.
      </p>

      {/* Doctors Section */}
      {/* <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap"> */}
          {/* Example Doctor Card (image path kept) */}
          {/* <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={bhushan}
              alt="Dr. Bhushan C Shetty - Nephrology & Urology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Bhushan C Shetty</h3>
          </div> */}
        {/* </div>
      </section> */}

    </div>
  );
};

export default NephrologyUrology;
