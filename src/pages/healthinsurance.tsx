import React from 'react';

// Import insurance logos
import Sampoornasuraksha from '../images/sampurna.jpg';
import ESIC from '../images/esic.jpeg';
import Yashaswini from '../images/yashaswini.jpeg';
import AdityaBirla from '../images/aditya-birla.jpeg';
import HDFC from '../images/hdfc.jpg';
import SBI from '../images/sbi.jpeg';
import Future from '../images/gci.jpg';
import StarHealth from '../images/star-health.jpeg';
import Bajaj from '../images/bajaj.jpeg';
import ManipalCigna from '../images/manipal-cigna.jpeg';
import Heritage from '../images/heritage.jpeg';
import Reliance from '../images/reliance.jpg';
import TataAIG from '../images/tata-aig.jpeg';
import MRPL from '../images/mrpl.jpeg';
import Ayushman from '../images/ayushman.jpeg';


const HealthInsurances: React.FC = () => {
  const insurances = [
    { name: 'SAMPOORNA SURAKSHA', logo: Sampoornasuraksha },
    { name: 'ESIC', logo: ESIC },
    { name: 'YASHASWINI INSURANCE', logo: Yashaswini },
    { name: 'ADITYA BIRLA', logo: AdityaBirla },
    { name: 'HDFC', logo: HDFC },
    { name: 'SBI GENERAL INSURANCE', logo: SBI },
    { name: 'FUTURE HEALTH INSURANCE', logo: Future },
    { name: 'STAR HEALTH INSURANCE', logo: StarHealth },
    { name: 'BAJAJ ALLIANZ LIFE INSURANCE', logo: Bajaj },
    { name: 'MANIPAL CIGNA HEALTH INSURANCE', logo: ManipalCigna },
    { name: 'HERITAGE TPA', logo: Heritage },
    { name: 'RELIANCE GENERAL INSURANCE', logo: Reliance },
    { name: 'TATA AIG INSURANCE', logo: TataAIG },
    { name: 'MRPL', logo: MRPL },
    { name: 'AYUSHMAN BHARATH INSURANCE', logo: Ayushman },
  ];

  return (
    <section className="max-w-6xl mx-auto my-16 p-6 bg-white rounded-lg shadow-md text-slate-800">
      <h1 className="text-4xl font-bold text-teal-800 mb-8 text-center">
        HEALTH INSURANCES
      </h1>

      <p className="mb-10 text-lg text-center">
        Our hospital has tie-ups with the following health insurance providers:
      </p>

      {/* Insurance Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {insurances.map((insurance, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-slate-50"
          >
            <img
              src={insurance.logo}
              alt={insurance.name}
              className="h-16 object-contain mb-4"
              loading="lazy"
            />
            <p className="text-sm font-semibold text-center text-slate-700">
              {insurance.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthInsurances;
