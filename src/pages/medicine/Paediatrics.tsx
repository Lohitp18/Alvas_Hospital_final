// src/pages/GeneralMedicine.tsx  (Rename if needed)
import React from 'react';
import murali from "../../images/murali.jpg";
import vasanth from "../../images/vasanth.jpg";

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">PAEDIATRICS</h1>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        The Paediatrics Department at Alva’s Health Centre provides comprehensive and compassionate 
        medical care for infants, children, and adolescents. With a child-friendly, family-centred 
        approach, the department ensures that every child feels safe, comfortable, and supported. 
        From routine check-ups and vaccinations to advanced treatment of paediatric illnesses, our 
        team focuses on prevention, early intervention, and holistic child health. Parents are 
        actively involved in decision-making, ensuring a collaborative approach to every child's 
        well-being.
      </p>

      {/* Structure & Offerings Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Paediatrics Department – Overview & Services
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
              <td className="px-4 py-2">Team / Staff</td>
              <td className="px-4 py-2">
                A dedicated team of paediatricians, nurses, and specialists. 
                In-house paediatricians include <strong>Dr. Vasanth T</strong>. 
                Staff are specially trained to care for infants and children with gentleness and reassurance.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Approach</td>
              <td className="px-4 py-2">
                Child-friendly, family-centred environment designed to reduce fear and stress. 
                Parents are fully involved in the care process.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Services Offered</td>
              <td className="px-4 py-2">
                Routine check-ups, vaccinations, growth monitoring, treatment of paediatric illnesses, 
                emergency care, and preventive health services.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Facilities</td>
              <td className="px-4 py-2">
                NICU (Neonatal Intensive Care Unit), paediatric rehabilitation, physiotherapy, 
                and a dedicated vaccination centre as part of community health initiatives.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Strengths</td>
              <td className="px-4 py-2">
                Backup support from multi-speciality services including labs, imaging, and emergency care, 
                enabling effective management of acute and complicated paediatric cases.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Accessibility</td>
              <td className="px-4 py-2">
                Convenient access for families in Moodbidri and surrounding areas, 
                reducing travel burden for regular paediatric care.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* DO NOT MODIFY — Doctor Images Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>

        <div className="flex justify-center items-center space-x-6">
          {/* Doctor 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={murali}
              alt="murali - Paediatrics Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Muralikrishna</h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={vasanth}
              alt="vasanth - Paediatrics Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Vasanth T</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
