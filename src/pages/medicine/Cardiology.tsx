// src/pages/Cardiology.tsx  (or whatever filename you prefer)
import React from "react";
import dithesh from "../../images/Dr. DITHESH M.png";
import praveenjshetty from "../../images/Dr. PRAVEEN J SHETTY.png";
import mnbhat from "../../images/Dr.M.N BHAT.png";
import narasimha from "../../images/Dr.NARASIMHA PAI.png";
import padmanaba from "../../images/Dr.PADMANABHA KAMATH.png";

const Cardiology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 bg-gray-50 rounded-lg shadow-lg font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - CARDIOLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Cardiology at Alva’s Health Centre offers specialized care for patients with heart-related conditions. 
          The department is equipped with the latest diagnostic and therapeutic tools, ensuring comprehensive care for all cardiac issues. 
          We offer a range of services from basic diagnostic tests to complex interventions, including emergency cardiac care.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our expert team includes both in-house and visiting cardiologists, providing a complete range of services, from routine check-ups 
          to advanced procedures. We emphasize both preventive care and management of acute conditions. In addition to routine cardiology services, 
          we offer access to specialized services for patients with complex needs, including emergency care and ICU support.
        </p>
      </section>

      {/* Key Features / Services Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          What We Offer
        </h2>

        <table className="w-full table-auto text-gray-700">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 font-semibold">Feature</th>
              <th className="text-left px-4 py-2 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Cardiology Services</td>
              <td className="px-4 py-2">
                Comprehensive cardiac care, including diagnostic tests, consultations, and treatment for heart diseases.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Diagnostic Services</td>
              <td className="px-4 py-2">
                Treadmill Test, ECHO (Echocardiogram), ECG, and more.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Emergency Cardiac Care</td>
              <td className="px-4 py-2">
                ICU and critical care support for managing acute cardiac conditions and emergencies.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Visiting Cardiologists</td>
              <td className="px-4 py-2">
                Dr. Padmanabha Kamath, Dr. Narasimha Pai, Dr. Praveen J. Shetty (Interventional Cardiologist) are available on specific days each month.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* DOCTOR SECTION */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-start space-x-6 overflow-x-auto">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={dithesh} 
              alt="Dr. Dithesh M - Cardiology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Dithesh M</h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={praveenjshetty} 
              alt="Dr. PRAVEEN J SHETTY - Cardiology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Praveen J Shetty</h3>
          </div>

          {/* Doctor 3 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={mnbhat} 
              alt="Dr.M.N BHAT - Cardiology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. M.N Bhat</h3>
          </div>

          {/* Doctor 4 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={narasimha} 
              alt="Dr. NARASIMHA PAI - Cardiology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Narasimha Pai</h3>
          </div>

          {/* Doctor 5 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={padmanaba} 
              alt="Dr. PADMANABHA KAMATH - Cardiology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Padmanabha Kamath</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardiology;
