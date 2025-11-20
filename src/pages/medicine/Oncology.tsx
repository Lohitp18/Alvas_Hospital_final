// src/pages/Oncology.tsx
import React from 'react';
import noor from "../../images/Dr. NOOR MOHAMMED.png"; // keep image path as is

const Oncology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">

      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - ONCOLOGY & ONCOSURGERY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre offers specialized Oncology & Onco-Surgery services, empanelled under ESIC (Karnataka). 
          The department provides comprehensive care for cancer patients, including surgical, medical, and supportive treatment modalities.
        </p>
      </section>

      {/* Department Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Department of Oncology
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
          The Oncology Department specializes in the diagnosis, treatment, and management of cancer. 
          Medical oncologists, surgical oncologists, and radiation oncologists collaborate to provide personalized treatment plans. 
          The department emphasizes early detection, cancer prevention, and palliative care alongside curative treatment.
        </p>
      </section>

      {/* Common Conditions Treated */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Common Conditions Treated</h3>
        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
          <li>Breast cancer</li>
          <li>Lung cancer</li>
          <li>Colorectal cancer</li>
          <li>Prostate cancer</li>
          <li>Blood cancers (leukemia, lymphoma, multiple myeloma)</li>
          <li>Head and neck cancers</li>
          <li>Gynecological cancers (ovarian, cervical, uterine)</li>
          <li>Skin cancers (melanoma, basal cell carcinoma, squamous cell carcinoma)</li>
          <li>Bone and soft tissue cancers (sarcomas)</li>
          <li>Brain and spinal cord tumors</li>
          <li>Pediatric cancers</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Services Provided by the Oncology Department</h3>
        <div className="space-y-6 text-gray-700 leading-relaxed tracking-wide">

          <div>
            <h4 className="text-xl font-semibold mb-2">Diagnostic & Screening Services</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Cancer screening programs (mammography, colonoscopy, Pap smear, PSA testing)</li>
              <li>Imaging studies (CT, MRI, PET-CT scans)</li>
              <li>Biopsy and pathological evaluation</li>
              <li>Genetic counseling and testing for hereditary cancers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Medical Oncology</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Chemotherapy and immunotherapy</li>
              <li>Targeted therapy and hormone therapy</li>
              <li>Day-care chemotherapy units</li>
              <li>Management of treatment side effects</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Surgical Oncology</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Tumor removal surgeries</li>
              <li>Breast-conserving and reconstructive surgeries</li>
              <li>Minimally invasive cancer surgeries</li>
              <li>Palliative surgical procedures</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Radiation Oncology</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>External beam radiation therapy (EBRT)</li>
              <li>Brachytherapy (internal radiation)</li>
              <li>Stereotactic radiosurgery (SRS) and stereotactic body radiotherapy (SBRT)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Supportive & Palliative Care</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Pain management and symptom control</li>
              <li>Nutritional counseling</li>
              <li>Psychological support and counseling</li>
              <li>Hospice and end-of-life care</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Rehabilitation & Preventive Care</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Post-treatment rehabilitation and survivorship programs</li>
              <li>Lifestyle guidance for cancer prevention</li>
              <li>Smoking cessation and wellness programs</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>
        <div className="flex justify-center items-center">
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={noor}
              alt="noor - Oncology Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xxx font-bold text-blue-800 mt-4">Dr. Noor Mohammed</h3>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Oncology;
