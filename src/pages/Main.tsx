import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import img1 from "../images/40 YEARS_20250806_093912_0000.png";
import about from "../images/about.png"
import chairman from "../images/chairman.webp"
import ot1 from "../images/Ot1.jpg"
import blood2 from "../images/blood2.jpg"
import { Heart, Droplet, AlertTriangle, Activity } from "lucide-react";

/* ------------------------- SECTION WRAPPER ------------------------- */
const Section = ({ id, className = '', children }: { 
  id?: string; 
  className?: string; 
  children: React.ReactNode; 
}) => (
  <section id={id} className={`py-16 lg:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

/* ------------------------- IMAGE SLIDER ------------------------- */
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      title: "World-Class Healthcare Facility",
      subtitle: "State-of-the-art medical infrastructure with international standards",
      cta: "Explore Our Facilities"
    },
    {
      image: ot1,
      title: "24/7 Emergency Care",
      subtitle: "Round-the-clock emergency services with rapid response teams",
      cta: "Emergency Services"
    },
    {
      image: blood2,
      title: "Advanced Medical Facilities",
      subtitle: "State of the art infrastructure ensuring safe and quality healthcare",
      cta: "Learn More"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden font-serif">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Glass Overlay and Trust Indicators for 2nd and other slides */}
          {index > 0 && (
            <>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg text-black ml-12 text-left">
                  <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">{slide.title}</h1>
                  <p className="text-lg lg:text-2xl mb-6">{slide.subtitle}</p>
                  {slide.cta && (
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      {slide.cta}
                    </button>
                  )}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="absolute top-20 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hidden lg:block font-serif">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">40</div>
                    <div className="text-xs text-gray-800">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">100K+</div>
                    <div className="text-xs text-gray-800">Patients Treated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">24/7</div>
                    <div className="text-xs text-gray-800">Emergency Care</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black p-3 rounded-full transition-all duration-200 z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black p-3 rounded-full transition-all duration-200 z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

/* ------------------------- CONTACT INFO ------------------------- */
//* ------------------------- CONTACT INFO ------------------------- */
const ContactInfo = () => (
  <section className="w-full">
    {/* Online Appointment Booking */}
    <div className="bg-white py-8 text-center">
      <h3 className="text-blue-900 text-lg font-semibold">For Appointment Booking</h3>
      <button className="mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
        Click Here
      </button>
    </div>

    {/* Visit us / Call us / When */}
    <div className="flex w-full text-white">
      {/* Visit us */}
      <div className="flex-1 bg-blue-900 p-6 text-center">
        <h4 className="font-semibold underline mb-2">Visit us</h4>
        <p>Alva's Health Centre </p>
        <p>Multi-Speciality Hospital</p>
        <p>Near Swaraj Maidan, Moodbidre , 574227</p>
      </div>

      {/* Call us */}
      <div className="flex-1 bg-blue-800 p-6 text-center">
        <h4 className="font-semibold underline mb-2">Call us</h4>
        <p>For Appointments: 08258 238104 to 238111(8 Lines) </p>
        <p>Phone: 08258 238104 to 238111(8 Lines) </p>
      </div>

      {/* When */}
      <div className="flex-1 bg-blue-900 p-6 text-center">
        <h4 className="font-semibold underline mb-2">When</h4>
        <p><strong>Open 24 Hours</strong></p>
        <p>For OP Bookings</p>
        <p>Monday – Saturday</p>
        <p>08:00 AM – 06:00 PM</p>
      </div>
    </div>
  </section>
);


/* ------------------------- HERO ------------------------- */
const Hero = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Award className="text-blue-600" size={24} />
          <span className="text-blue-600 font-semibold">World-Class Healthcare</span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Advanced Medical Care You Can 
          <span className="text-blue-600"> Trust</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Experience exceptional healthcare with our internationally trained specialists, 
          cutting-edge technology, and patient-centered approach to healing.
        </p>
      </div>
    </div>
  </section>
);

/* ------------------------- ABOUT ------------------------- */
/* ------------------------- ABOUT ------------------------- */
/* ------------------------- ABOUT ------------------------- */
/* ------------------------- ABOUT ------------------------- */
const About = () => (
  <section id="about" className="bg-white py-16 max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Us */}
        <div className="bg-blue-900 text-white p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Alva's Health Centre stands as a beacon of medical excellence, combining advanced technology with compassionate care. Our internationally trained medical team delivers world-class treatment across multiple specialties.
          </p>
          <button
            onClick={() => window.location.href = "/about"} 
            className="self-start px-4 py-2 border border-white rounded-md hover:bg-white hover:text-blue-900 transition"
          >
            Read More
          </button>
        </div>

        {/* CT Scan */}
        <div className="bg-white text-blue-900 p-6 rounded-lg flex flex-col justify-between border border-blue-900">
          <h3 className="text-xl font-semibold mb-4">CT Scan</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            A CT Scan combines X-ray images taken from different angles with computer technology to create detailed cross-sectional images of the body.
          </p>
          <button
            onClick={() => window.location.href = "/ct-scan"} 
            className="self-start px-4 py-2 border border-blue-900 rounded-md hover:bg-blue-900 hover:text-white transition"
          >
            Read More
          </button>
        </div>

        {/* AARC / Home Visit */}
        <div className="bg-white text-blue-900 p-6 rounded-lg flex flex-col justify-between border border-blue-900">
          <h3 className="text-xl font-semibold mb-4">AARC</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            ALVA'S AASARE, a unit of Alva's Health Centre, Moodbidri is a premier home healthcare service dedicated to providing compassionate and professional care to individuals in the comfort of their own homes.
          </p>
          <button
            onClick={() => window.location.href = "/aasare"} 
            className="self-start px-4 py-2 border border-blue-900 rounded-md hover:bg-blue-900 hover:text-white transition"
          >
            Read More
          </button>
        </div>

        {/* Punarjanma */}
        <div className="bg-blue-900 text-white p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Punarjanma</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            A place for rebirth from addiction. <br />
            Alva's Punarjanma is a unit of Alva's Health Centre, established on 19/01/2020 by Dr. Vinay Alva for the betterment of people suffering from addiction to various substances.
          </p>
          <button
            onClick={() => window.location.href = "/punarjanma"} 
            className="self-start px-4 py-2 border border-white rounded-md hover:bg-white hover:text-blue-900 transition"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src={about}
          alt="Health Centre Building"
          className="rounded-lg shadow-lg object-cover w-full h-[630px]"
        />
      </div>
    </div>
  </section>
);




/* ------------------------- MESSAGES ------------------------- */
const Messages = () => (
  <Section id="messages" className="bg-gray-50">
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="w-12 h-1 bg-blue-600"></div>
        <span className="text-blue-600 font-semibold uppercase tracking-wide">Leadership Vision</span>
        <div className="w-12 h-1 bg-blue-600"></div>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
        A Message from Our <span className="text-blue-600">Chairman</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our commitment to patient well-being and medical innovation drives everything we do.
      </p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src={chairman}
          alt="Dr. Alva, Hospital Director"
          className="rounded-2xl shadow-xl w-full"
        />
        <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">Dr.Mohan Alva</div>
            <div className="text-sm">Chairman</div>
          </div>
        </div>
      </div>
      <div>
        <blockquote
          className="text-2xl lg:text-3xl font-serif italic text-gray-800 leading-relaxed mb-8 relative pl-12"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <MessageSquare className="absolute left-0 top-0 text-blue-400" size={48} />
          "At Alva's Health Centre, we believe in a holistic approach to healthcare..."
        </blockquote>

        <p className="text-lg text-gray-700 mb-8">
          — Dr. Mohan Alva, Chairman, AEF
        </p>
        <a
          href="/messages"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
        >
          Read More Messages
        </a>
      </div>
    </div>
  </Section>
);

/* ------------------------- QUICK LINKS ------------------------- */
const QuickLinks = () => (
  <Section className="bg-gray-50 flex flex-col items-center">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
      <p className="text-gray-600">
        Easy access to our most popular services and information
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 place-items-center">

      {/* Our Services */}
      <a
        href="/services"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
      >
        <Heart
          className="mx-auto mb-4 text-red-500 group-hover:scale-110 transition-transform"
          size={48}
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Services</h3>
        <p className="text-gray-600 text-sm">Comprehensive medical care</p>
      </a>

      {/* Dialysis */}
      <a
        href="/dailysis"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
      >
        <Droplet
          className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform"
          size={48}
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Dialysis</h3>
        <p className="text-gray-600 text-sm">Advanced renal care</p>
      </a>

      {/* Blood Bank */}
      <a
        href="/bloodbank"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
      >
        <Heart
          className="mx-auto mb-4 text-rose-600 group-hover:scale-110 transition-transform"
          size={48}
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Blood Bank</h3>
        <p className="text-gray-600 text-sm">Safe & reliable blood services</p>
      </a>

      {/* Emergency Department */}
      <a
        href="/emergencyandtraumacare"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
      >
        <AlertTriangle
          className="mx-auto mb-4 text-yellow-500 group-hover:scale-110 transition-transform"
          size={48}
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency</h3>
        <p className="text-gray-600 text-sm">24/7 emergency care</p>
      </a>

      {/* Cardiology */}
      <a
        href="/cardiology"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
      >
        <Activity
          className="mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform"
          size={48}
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Cardiac</h3>
        <p className="text-gray-600 text-sm">Heart care specialists</p>
      </a>

    </div>
  </Section>
);

/* ------------------------- FLOATING BLOOD CARD ------------------------- */
const FloatingBloodCard = () => {
  const [activeTab, setActiveTab] = useState("greet");

  return (
    <div className="fixed bottom-24 right-6 z-50 w-64 bg-white shadow-xl rounded-xl border overflow-hidden">
      <div className="flex">
        <button
          onClick={() => setActiveTab("greet")}
          className={`flex-1 py-2 text-sm font-semibold ${
            activeTab === "greet" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Greetings
        </button>
        <button
          onClick={() => setActiveTab("donate")}
          className={`flex-1 py-2 text-sm font-semibold ${
            activeTab === "donate" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Donate
        </button>
      </div>
      <div className="p-4 text-sm text-gray-700 leading-relaxed">
        {activeTab === "greet" && (
          <p>
            ❤️ Thank you to our brave <b>Blood Donors!</b><br />
            Your kindness saves precious lives daily.
          </p>
        )}
        {activeTab === "donate" && (
          <div className="text-center">
            <p className="mb-3">
              Want to donate blood?<br />Contact us on WhatsApp.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20donate%20blood."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm shadow hover:bg-green-700 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

/* ------------------------- FLOATING WHATSAPP ------------------------- */
const FloatingWhatsapp = () => (
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0a12 12 0 0 0-10.4 17.94L0 24l6.27-1.64A12 12 0 1 0 20.52 3.48Zm-8.52 19a9.94 
      9.94 0 0 1-5.09-1.39l-.36-.2-3.73.98.99-3.63-.23-.38A9.9 9.9 0 1 1 12 21.5ZM17.14 14.38c-.26-.13-1.53-.76-1.77-.85s-.41-.13-.58.13-.66.85-.8 1.03-.29.19-.55.06a6.47 
      6.47 0 0 1-1.9-1.17 7.15 7.15 0 0 1-1.32-1.63c-.14-.24 0-.37.1-.5.1-.13.26-.29.39-.44.13-.14.17-.24.26-.4.09-.15.04-.28-.02-.4-.07-.13-.58-1.4-.8-1.91-.21-.5-.43-.43-.58-.44-.15 0-.32 0-.5 0s-.4.05-.61.27a2.54 2.54 0 0 0-.83 1c-.29.51-1.12 1.92-1.12 4.67s1.15 5.41 1.31 5.78c.16.36 2.27 3.47 5.51 4.86a5.92 5.92 0 0 0 2.63.5c1.11 0 2.27-.45 2.6-.89.33-.44.33-.82.23-.89-.1-.07-.37-.12-.76-.21Z"/>
    </svg>
  </a>
);

/* ------------------------- APP ------------------------- */
const App = () => {
  return (
    <div className="App font-sans">
      <ImageSlider />
      <ContactInfo />   {/* <-- Add here */}
      <Hero />
      <About />
      <Messages />
      <QuickLinks />
      <FloatingBloodCard />
      <FloatingWhatsapp />
    </div>
  );
};


export default App;
