// src/pages/GeneralMedicine.tsx
import React from 'react';
import thilak from "../../images/thilak.jpg";

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">RADIOLOGY</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        Our team of radiologists and technicians utilize state-of-the-art equipment, including X-rays, CT scans, ultrasound, and ECG/echocardiography, to provide high-quality imaging studies. From detecting fractures and tumors to assessing internal organ function, we deliver precise and timely results to support patient care across various medical specialties. With a commitment to excellence and patient-centered care, we strive to optimize health outcomes through advanced imaging technology.
      </p>

      <section className="bg-white p-6 rounded-lg shadow-sm mt-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3 border-b border-blue-200 pb-2">Services Offered</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>X-ray Imaging:</strong> For bone injuries, fractures, and musculoskeletal conditions.</li>
          <li><strong>Ultrasound Scanning:</strong> Abdomen, fetal monitoring, soft tissues, and organ assessment.</li>
          <li><strong>CT Scan:</strong> Detailed evaluation of internal organs, bones, and complex anatomical structures.</li>
          <li><strong>ECG / Echocardiography:</strong> Cardiac diagnostic support integrated with radiology services.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm mt-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>
        <div className="flex justify-center items-center">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={thilak} // Image section remains unchanged
              alt="thilak - General Medicine Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xxx font-bold text-blue-800 mt-4">Dr. Thilak Shetty</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
