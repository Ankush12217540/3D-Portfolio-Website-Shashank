import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Glowing Social Icons */}
        <div className="flex space-x-6">
          <a
            href="  https://github.com/shashank007s     "
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.9)] transition-all duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.instagram.com/shashank_sa2006/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.9)] transition-all duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shashankkumar0007/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-blue-500 hover:shadow-[0_0_15px_rgba(96,165,250,0.9)] transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Glowing Contact Info */}
        <div className="text-sm text-center md:text-left space-y-2">
          <p className="border border-green-500 px-4 py-2 rounded-md hover:shadow-[0_0_15px_rgba(34,197,94,0.9)] transition-all duration-300">
            📞 Contact: +91 9508725226   
          </p>
          <p className="border border-cyan-400 px-4 py-2 rounded-md hover:shadow-[0_0_15px_rgba(34,211,238,0.9)] transition-all duration-300">
            ✉️ Email: shashankkumar5901@gmail.com
          </p>
        </div>

        {/* Credits */}
        <div className="text-sm text-center md:text-right space-y-1">
          <p>&copy; {new Date().getFullYear()} Shashank Kumar. All rights reserved.</p>
          <p>Built with ❤️ using React & TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
