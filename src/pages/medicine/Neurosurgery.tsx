// src/pages/Neurosurgery.tsx
import React from "react";
import doctorImage from  "../../images/dr sattar.jpg"

const Neurosurgery = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        NEUROSURGERY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Neurosurgery Department specializes in the surgical treatment of disorders affecting the nervous system, 
        including the brain, spine, and peripheral nerves. Our skilled neurosurgeons handle complex procedures for 
        conditions such as brain tumors, spinal cord injuries, and nerve disorders. Using advanced imaging and 
        surgical techniques, we ensure precise interventions and optimal outcomes. Committed to comprehensive care, 
        our Neurosurgery team focuses on both surgical and rehabilitative aspects to enhance patient recovery and quality of life.
      </p>

      <section className="bg-blue-50 p-6 rounded-lg shadow-lg mb-8 max-w-sm mx-auto border border-blue-200">
  <h2 className="text-xl font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-1 text-center">
    BRAIN & SPINE
  </h2>

  <h3 className="text-lg font-semibold text-blue-600 mb-2 text-center">
    Our Services
  </h3>

  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>TRAUMA – Traumatic Brain & Spine Injuries</li>
    <li>Cervical and Lumbar Disc Problems</li>
    <li>Neck Pain</li>
    <li>Back Pain</li>
    <li>Congenital Brain Spine Anomalies</li>
    <li>Brain & Spine Tumours</li>
    <li>Hydrocephalus </li>
    <li>Minimally Invasive Spine Surgery</li>
    <li>Brain Abscess</li>
    <li>Headache  </li>
    <li>Stroke </li>
    <li>Epilepsy </li>
  </ul>
</section>


     {/* Doctors Section */}
     <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center gap-6 items-center flex-wrap">
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={doctorImage}
              alt="Dr. Sattar Khan"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">
              Dr. Sattar Khan
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neurosurgery;
