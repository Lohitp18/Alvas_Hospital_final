// src/pages/PlasticSurgery.tsx
import React from 'react';
// import surgeonImg from "../../images/surgeon.jpg"; // placeholder image path

const PlasticSurgery = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        PLASTIC & RECONSTRUCTIVE SURGERY
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre offers a wide range of plastic and reconstructive surgery services. 
          Our expert surgeons provide treatments for both cosmetic enhancement and reconstructive needs, 
          using advanced techniques for safe, effective, and aesthetically pleasing results.
        </p>
      </section>

      {/* Conditions Treated */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions & Cases Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Cosmetic enhancement procedures (facelifts, rhinoplasty, liposuction, breast surgery)</li>
          <li>Post-trauma reconstruction</li>
          <li>Burn injury management</li>
          <li>Scar revision surgeries</li>
          <li>Cleft lip and palate repair</li>
          <li>Hand surgery & microsurgery for nerve repair and functional restoration</li>
          <li>Skin and soft tissue procedures, including removal of benign/malignant growths</li>
          <li>Wound coverage and skin grafting</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided
        </h2>

        {/* Cosmetic Surgery */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Cosmetic Surgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Facelift and eyelid surgery (blepharoplasty)</li>
            <li>Rhinoplasty (nose reshaping)</li>
            <li>Liposuction and body contouring</li>
            <li>Breast augmentation, reduction, and lift</li>
          </ul>
        </div>

        {/* Reconstructive Surgery */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Reconstructive Surgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Post-trauma reconstruction (facial fractures, wounds)</li>
            <li>Burn injury treatment and scar management</li>
            <li>Cleft lip and palate repair</li>
            <li>Breast reconstruction (post-mastectomy)</li>
          </ul>
        </div>

        {/* Hand & Microsurgery */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Hand Surgery & Microsurgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Nerve repair and functional restoration</li>
            <li>Complex hand injury management</li>
            <li>Reconstructive procedures for congenital and acquired deformities</li>
          </ul>
        </div>

        {/* Skin & Soft Tissue Procedures */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Skin & Soft Tissue Procedures</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Removal of benign and malignant growths</li>
            <li>Wound coverage using skin grafts and flaps</li>
            <li>Management of chronic non-healing wounds</li>
          </ul>
        </div>
      </section>

      {/* Doctors Section (Image not changed) */}
      {/* <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2 text-center">
          Our Doctors
        </h2>
        <div className="flex justify-center items-center">
          <div className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src={surgeonImg}
              alt="Plastic Surgery Specialist"
              className="mx-auto w-40 h-40 rounded-full object-cover"
            />
            <h3 className="text-xxx font-bold text-blue-800 mt-4">Dr. [Name]</h3>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default PlasticSurgery;
