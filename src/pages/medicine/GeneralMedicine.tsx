// src/pages/GeneralMedicine.tsx
import React from 'react';
import vinay from "../../images/vinay alva.jpg"; // Update with the correct image path

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">General Medicine</h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        The General Medicine Department at Alva’s Health Centre provides comprehensive care for various internal medicine conditions. Our department is managed by a team of experienced and dedicated physicians, including eminent doctors such as Dr. B. Sadananda Naik and Dr. Dhanya Hegde. We emphasize patient-centred, evidence-based care, with a commitment to improving the health and wellbeing of our community.
      </p>

      {/* Feature Details */}
      <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          General Medicine Department Structure & Offerings
        </h2>

        {/* Table displaying features */}
        <table className="w-full table-auto text-gray-700">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 font-semibold">Feature</th>
              <th className="text-left px-4 py-2 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Team / Staff</td>
              <td className="px-4 py-2">
                The department is managed by experienced physicians, including Dr. B. Sadananda Naik and Dr. Dhanya Hegde.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Focus Areas</td>
              <td className="px-4 py-2">
                The department specializes in the management of common internal medicine conditions such as diabetes, hypertension, thyroid disorders, and more.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Patient-Care Philosophy</td>
              <td className="px-4 py-2">
                We emphasize patient-centred, evidence-based medical care. Our staff is knowledgeable, motivated, and works round the clock to ensure the best outcomes for our patients.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Services & Facilities</td>
              <td className="px-4 py-2">
                The department provides services including general medicine ward, diagnostic lab services, physician consultations, and treatment for both chronic and acute medical conditions. The hospital is well-equipped to provide comprehensive care.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Operating Hours / Access</td>
              <td className="px-4 py-2">
                The hospital is open every day with 24×7 emergency services. General consultation hours: Monday-Saturday 8:00 AM – 6:00 PM, Sunday 8:00 AM – 2:00 PM.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Doctors Section */}
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
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Vinay Alva</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
