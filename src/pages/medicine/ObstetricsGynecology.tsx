// src/pages/ObstetricsGynaecology.tsx
import React from "react";
import hana from "../../images/hana.jpg"; 
import ramesh from "../../images/ramesh.jpg"; 
import revathi from "../../images/revathi.jpg"; 

const ObstetricsGynaecology = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        OBSTETRICS & GYNAECOLOGY
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        The Obstetrics & Gynecology (OBG) Department at Alva’s Health Centre is dedicated to providing 
        comprehensive care for women's health. Our experienced obstetricians and gynecologists offer a 
        wide range of services, including prenatal and postnatal care, routine gynecological exams, and 
        specialized treatments for reproductive health issues. We are committed to the health and well-being 
        of both mothers and babies, providing personalized care throughout pregnancy, childbirth, and beyond. 
        From family planning and fertility treatments to managing menopause and gynecological surgeries, 
        our OBG department supports women at every stage of life with compassionate and expert care.
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
              src={hana}
              alt="Dr. Hana Shetty - Obstetrics & Gynecology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Hana Shetty</h3>
          </div>

          {/* Doctor 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={ramesh}
              alt="Dr. Ramesha - Obstetrics & Gynecology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Ramesha</h3>
          </div>

          {/* Doctor 3 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={revathi}
              alt="Dr. Revathi Bhat - Obstetrics & Gynecology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Dr. Revathi Bhat</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ObstetricsGynaecology;
