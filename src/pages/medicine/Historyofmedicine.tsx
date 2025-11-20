// src/pages/HistoryOfMedicine.tsx
import React from 'react';

const HistoryOfMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - HISTORY OF MEDICINE
      </h1>

      {/* Key Origins & Early Steps Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Origins & Early Steps
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>1980:</strong> Dr. M. Mohan Alva started an Ayurvedic clinic in Moodbidri to serve rural health needs, focusing on local issues like snake bites.</li>
          <li><strong>1982:</strong> Alva's Pharmacy was founded to produce medicines locally, meeting the growing demand in the region.</li>
          <li><strong>1986 (May 31):</strong> Alva’s Health Centre (AHC) was formally established as a full-fledged multi-specialty hospital to provide affordable and quality healthcare for people in and around Moodbidri. This made healthcare more accessible for those who would otherwise have to travel long distances (30-40 km or more).</li>
        </ul>
      </section>

      {/* Expansion of Medical Services & Facilities Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Expansion of Medical Services & Facilities
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Over the years, AHC has significantly expanded its services both in capacity and in the range of medical specialties offered. Key developments include:
        </p>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>The hospital has grown to about 200 beds (with some sources saying up to 300-bed capacity), serving multiple specialties.</li>
          <li>Multi-specialty services include general medicine, surgery (including endoscopic and laparoscopic techniques), orthopaedics, obstetrics & gynaecology, paediatrics, ENT, ophthalmology, cardiology, neurology, nephrology, dermatology, psychiatry, dental care, and more.</li>
          <li>Critical care facilities include ICU, Surgical ICU (SICU), NICU, and emergency & trauma care.</li>
          <li>Imaging and diagnostic support is provided through CT scan, ultrasound, X-ray, PFT (Pulmonary Function Test), ECG, and ECHO.</li>
        </ul>
      </section>

      {/* Integration with Traditional Medicine & Education Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Integration with Traditional Medicine & Education
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre is not only rooted in modern medicine, but also incorporates traditional healing systems such as Ayurveda, naturopathy, and allied health education. Key developments in this area include:
        </p>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>1996:</strong> The establishment of Alva’s Ayurveda Medical College & Hospital under the Alva’s Education Foundation marked a significant step in integrating Ayurvedic medicine into the healthcare offering.</li>
          <li>The Ayurveda College initially offered undergraduate BAMS (Bachelor of Ayurvedic Medicine & Surgery) and later added postgraduate (PG) specialties like Dravyaguna Vijnana and Shalya Tantra around 2006.</li>
          <li>The college developed a hospital component with inpatient (IPD) wards and outpatient (OPD) services, providing students with clinical exposure alongside modern hospital services.</li>
          <li>The “Shubhadhama” facility integrates Ayurveda, Yoga, and Naturopathy, focusing on holistic mental health and well-being.</li>
        </ul>
      </section>
    </div>
  );
};

export default HistoryOfMedicine;
