// src/pages/Anesthesiology.tsx
import React from 'react';
import mamatha from "../../images/mamtha.jpg";
import swarna from "../../images/swarna.jpg";
import Shrikant from "../../images/srikanth.jpg";
import dilip from "../../images/dr dilip.jpeg";

const Anesthesiology = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        ANESTHESIOLOGY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
      The Anesthesiology department specializes in managing pain and providing anesthesia services for various medical and surgical procedures. Our skilled anesthesiologists ensure patient comfort and safety by administering anesthesia tailored to individual needs, monitoring vital signs, and managing pain levels throughout procedures. We focus on creating a safe and effective anesthesia plan, from preoperative assessment to postoperative care, to support optimal outcomes and a smooth recovery. Whether for minor procedures or major surgeries, our Anesthesiology team is committed to delivering expert care with precision and compassion.      </p>

      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={mamatha}
              alt="Dr. Mamatha - Anesthesiology"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Mamatha</h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={swarna}
              alt="Dr. Swarnarekha - Anesthesiology"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Swarnarekha</h3>
          </div>

          {/* Doctor 3 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={Shrikant}
              alt="Dr. Shrikanth - Anesthesiology"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Shrikanth</h3>
          </div>

          {/* Doctor 4 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={dilip}
              alt="Dr. Dilip Kumar S N - Anesthesiology"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Dilip Kumar S N</h3>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Anesthesiology;
