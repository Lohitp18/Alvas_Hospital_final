// src/pages/PlasticSurgery.tsx
import React from 'react';
// import krishna from "../../images/Dr. KRISHNAPRASAD SHETTY.png"; // placeholder image path

const PlasticSurgery = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        PLASTIC & RECONSTRUCTIVE SURGERY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Plastic & Cosmetic Surgery department at Alva’s Health Centre offers a range of surgical 
        and non-surgical procedures to enhance appearance and reconstruct physical features. Our skilled 
        surgeons specialize in cosmetic enhancements, including facelifts, breast augmentations, and 
        body contouring, as well as reconstructive surgeries for trauma, congenital anomalies, and 
        post-cancer care. Utilizing advanced techniques and state-of-the-art technology, we focus on 
        achieving natural-looking results while prioritizing patient safety and satisfaction. 
        Personalized care ensures each patient’s aesthetic and functional goals are met with expertise.
      </p>

      {/* Doctors Section */}
      {/* <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          {/* Doctor 1 */}
          {/* <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={krishna}
              alt="Dr. Krishnaprasad Shetty - Plastic Surgery Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Krishnaprasad Shetty</h3>
          </div>
        </div>
      </section> */} 
    </div>
  );
};

export default PlasticSurgery;
