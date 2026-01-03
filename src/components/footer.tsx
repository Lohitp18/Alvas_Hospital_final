import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Award, Shield, Heart } from 'lucide-react';
//import logo from "../images/logo.png"
import logo1 from "../images/logo1.jpg";

const Footer = () => {
  return (
    <>
      {/* Contact Info Section */}
      <section className="text-white">
  <div className="grid grid-cols-1 md:grid-cols-3">

    {/* Left */}
    <div className="bg-blue-800 py-8 px-6 flex items-center justify-center">
      <div className="flex items-center gap-4 text-center">
        <MapPin size={28} />
        <div>
          <p className="font-semibold text-lg">Find Us On Map</p>
          <p className="text-blue-200 text-sm">Reach us!</p>
        </div>
      </div>
    </div>

    {/* Middle (Brighter) */}
    <div className="bg-blue-900 py-8 px-6 flex items-center justify-center">
      <div className="flex items-center gap-4 text-center">
        <Phone size={28} />
        <div>
          <p className="font-semibold text-lg">Have a question? Call us now</p>
          <p className="text-blue-100 text-sm">08258 238104 to 238111(8 Lines)</p>
        </div>
      </div>
    </div>

    {/* Right */}
    <div className="bg-blue-800 py-8 px-6 flex items-center justify-center">
      <div className="flex items-center gap-4 text-center">
        <Mail size={28} />
        <div>
          <p className="font-semibold text-lg">Feel free to message us!</p>
          <p className="text-blue-200 text-sm">ahc@alvas.org</p>
        </div>
      </div>
    </div>

  </div>
</section>




      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Hospital Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={logo1}
                  alt="Alvas Logo"
                  className="h-12 w-12 squared-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Alva's Health Centre</h3>
                  <p className="text-blue-300 text-sm">Excellence in Healthcare Since 1985</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                A holistic healthcare institution committed to providing exceptional medical care 
                with compassionate service.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-blue-900/50 px-3 py-2 rounded-lg">
                  <Award className="text-blue-400" size={16} />
                  <span className="text-sm text-blue-300">JCI Accredited</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-900/50 px-3 py-2 rounded-lg">
                  <Shield className="text-green-400" size={16} />
                  <span className="text-sm text-green-300">ISO 9001:2015</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-lg">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-lg">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Medical Services</a></li>
                <li><a href="#" className="hover:text-blue-400">Departments</a></li>
                <li><a href="#" className="hover:text-blue-400">Health Packages</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Information</h4>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex gap-3">
                  <MapPin className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p>Alva's Health Centre</p>
                    <p>Near Swaraj Maidan, Moodbidre</p>
                    <p>574227</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-blue-400" size={18} />
                  <p>ahc@alvas.org</p>
                </div>

                <div className="flex gap-3">
                  <Clock className="text-blue-400 mt-1" size={18} />
                  <p className="text-green-400 font-semibold">Emergency: 24/7</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Alva's Healthcare. All rights reserved with logicheu</p>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>for better healthcare</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
