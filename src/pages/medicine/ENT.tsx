// src/pages/ENT.tsx
import React from 'react';
import sushan from "../../images/sushan.jpg";
import shwetha from "../../images/dr shwetha.jpeg";
import aishwarya from "../../images/dr aishwarya.jpeg";

const ENT = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        ENT (Ear, Nose, Throat & Head & Neck Surgery)
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The ENT Department at Alva’s Health Centre focuses on diagnosing and treating a wide range of 
        conditions related to the ear, nose, throat, head, and neck. Our skilled specialists provide 
        comprehensive care for issues such as hearing loss, sinus problems, throat infections, voice 
        disorders, and nasal conditions. Utilizing advanced diagnostic tools and treatments, including 
        surgical interventions when necessary, we aim to relieve symptoms and improve patients’ quality 
        of life. Whether addressing chronic conditions or acute concerns, the ENT team is dedicated to 
        delivering effective and compassionate care.
      </p>

      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={sushan} 
              alt="Dr. Sushan Shetty - ENT Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Sushan Shetty</h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={shwetha} 
              alt="Dr. Shwetha C Poojary - ENT Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Shwetha C Poojary</h3>
          </div>

          {/* Doctor 3 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={aishwarya} 
              alt="Dr. Aishwarya Ramakrishnan - ENT Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Aishwarya Ramakrishnan</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ENT;
