"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Brand / Tagline */}
        <div>
          <h2 className="text-xl font-bold text-white">Abhishek Chaudhary</h2>
          <p className="mt-2 text-sm text-gray-400">
            Frontend Developer • Open to opportunities • Building cool projects with React & Next.js
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <Link href="#about" className="hover:text-blue-400">About</Link>
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#skills" className="hover:text-blue-400">Skills</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Right - Social Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">Connect with me</h3>
          <div className="flex space-x-4">
            <a
              href="mailto:abhishekchaudhary1223@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition"
            >
              <FaEnvelope size={24} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-chaudhary-18b909255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <FaLinkedin size={24} color="white" />
            </a>
            <a
              href="https://github.com/Abhishekchaudhary12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <FaGithub size={24} color="white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Abhishek Chaudhary. Built with  using Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
