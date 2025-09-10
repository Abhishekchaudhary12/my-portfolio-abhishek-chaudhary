"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }

    // Encode mailto link with subject + body
    const mailto = `mailto:abhishekchaudhary1223@gmail.com?subject=Message from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(
      form.email
    )}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Background Image */}
      <div
        className="absolute inset-0 md:relative md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/cc/1f/b7/cc1fb7bcd875829e016848e94e2d1926.jpg')",
        }}
      >
        <div className="w-full h-full bg-white/30"></div>
      </div>

      {/* Right Side: Content */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 py-16 flex flex-col justify-center md:text-left text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black drop-shadow mb-6">
          Get in Touch
        </h2>
        <p className="text-black mb-12 text-lg">
          Let’s collaborate on exciting projects or just have a chat!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-xl text-left bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10 mx-auto md:mx-0"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">
              Message
            </label>
            <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full mt-2 px-4 py-3 rounded-lg bg-white/20 border border-gray-600 text-black placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
            required
            ></textarea>

          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 items-center justify-center flex shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-4 mt-12">
          <a
            href="mailto:abhishekchaudhary1223@gmail.com"
            className="flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition transform hover:scale-110 shadow-lg text-white"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-chaudhary-18b909255/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition transform hover:scale-110 shadow-lg text-white"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/Abhishekchaudhary12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 transition transform hover:scale-110 shadow-lg text-white"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
