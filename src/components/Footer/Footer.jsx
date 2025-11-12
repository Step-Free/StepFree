import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../assets/Barrier.png";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700  border-gray-200">
      <div className="container mx-auto px-6 py-1 flex flex-col md:flex-row justify-between items-center">
      
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={Logo}
            alt="StepFree Logo"
            className="w-15 h-15"
          />
          <h2 className="text-2xl font-bold text-blue-700 italic">StepFree</h2>
        </div>

      
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-700 font-medium py-6">
          <li><a href="/home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="/about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="/services" className="hover:text-blue-600 transition">Services</a></li>
        </ul>
      </div>

      <hr className="border-gray-200" />

      
      <div className="container mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm ">
        <p className="text-gray-400">© {new Date().getFullYear()} StepFree. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
