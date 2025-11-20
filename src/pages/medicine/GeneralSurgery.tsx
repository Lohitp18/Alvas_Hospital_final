// src/pages/GeneralSurgery.tsx
import React from 'react';
import vinay from "../../images/vinay alva.jpg"; // Update with the correct image path
const GeneralSurgery = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        GENERAL, ENDOSCOPIC & LAPAROSCOPIC SURGERY
      </h1>

      {/* Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          At Alva’s Health Centre, our General, Endoscopic, and Laparoscopic Surgery Department provides 
          advanced surgical care with a focus on patient safety, comfort, and faster recovery.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Offered
        </h2>

        <ul className="list-disc list-inside ml-6 space-y-3 text-gray-700 leading-relaxed tracking-wide">

          {/* General Surgery */}
          <li>
            <strong>General Surgery:</strong> Comprehensive care for common surgical conditions such as 
            appendicitis, hernia, gallbladder diseases, abdominal disorders, breast lumps, and 
            skin/soft tissue problems.
          </li>

          {/* Endoscopic Surgery */}
          <li>
            <strong>Endoscopic Surgery:</strong> Minimally invasive diagnostic and therapeutic procedures 
            using flexible endoscopes for conditions of the stomach, intestines, and other internal organs. 
            This allows early detection and treatment with minimal discomfort.
          </li>

          {/* Laparoscopic Surgery */}
          <li>
            <strong>Laparoscopic Surgery:</strong> Keyhole surgery using specialized instruments and a camera 
            for procedures like gallbladder removal, appendix surgery, hernia repair, and bariatric surgery. 
            Benefits include smaller scars, reduced pain, shorter hospital stays, and quicker recovery.
          </li>

        </ul>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
  Our Doctors
</h2>

        <div className="flex justify-center items-center">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={vinay} // Use the correct image path
              alt="vinay - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xxx font-bold text-blue-800 mt-4">Dr. Vinay Alva</h3>
          </div>
        
        </div>
      </section>

    </div>
  );
};

export default GeneralSurgery;
