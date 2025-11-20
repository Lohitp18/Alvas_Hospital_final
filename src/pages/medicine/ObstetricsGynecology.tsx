// src/pages/ObstetricsGynaecology.tsx
import React from "react";

const ObstetricsGynaecology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OBSTETRICS & GYNAECOLOGY
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Obstetrics & Gynaecology Department at Alva’s Health Centre provides comprehensive care 
          for women across all stages of life—from pregnancy and childbirth to reproductive health 
          and gynecological conditions. Equipped with modern facilities and supported by skilled 
          consultants, the department ensures safe, effective, and compassionate care.
        </p>
      </section>

      {/* Staff & Expertise */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Staff & Expertise
        </h2>

        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Experienced Obstetricians & Gynaecologists available for consultation.</li>
          <li>On-call OBGYN consultants available for emergencies and high-risk cases.</li>
          <li>Support from trained nursing staff and allied health professionals.</li>
        </ul>
      </section>

      {/* Facilities & Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Facilities & Services
        </h2>

        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Well-equipped Labour Theatre for safe and assisted deliveries.</li>
          <li>NICU (Neonatal Intensive Care Unit) for newborns requiring special care.</li>
          <li>Ultrasound scanning for obstetric and gynaecological evaluations.</li>
          <li>Operating Theatres (OT) for gynecological surgeries, including laparoscopic procedures.</li>
        </ul>
      </section>

      {/* Scope of Care */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Scope of Care
        </h2>

        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>Prenatal Care:</strong> Routine check-ups, fetal monitoring, ultrasounds, and pregnancy management.</li>
          <li><strong>Childbirth Services:</strong> Normal deliveries, assisted deliveries, and management of high-risk pregnancies, supported by NICU care.</li>
          <li><strong>Postnatal Care:</strong> Health monitoring and support for mothers and newborns after delivery.</li>
          <li><strong>Gynaecological Services:</strong> Screening, reproductive health care, family planning, and laparoscopic gynecological surgeries.</li>
        </ul>
      </section>

    </div>
  );
};

export default ObstetricsGynaecology;
