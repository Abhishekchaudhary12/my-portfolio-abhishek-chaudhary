import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/cc/1f/b7/cc1fb7bcd875829e016848e94e2d1926.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 pt-20px mt-20 ">
        {/* Left Side: Profile + Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Profile picture */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-black shadow-lg mb-6 ">
            <Image
              src="/profile.jpeg"
              alt="Abhishek Chaudhary"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900">
             I'm{" "}
            <span className="text-black">Abhishek Chaudhary</span>
          </h1>
        </div>

        {/* Right Side: Intro + Buttons */}
        <div className="max-w-xl text-center md:text-left">
          <p className="mt-6 text-lg md:text-xl text-black">
            A passionate{" "}
            <span className="font-bold text-blue-900">Frontend Developer</span>{" "}
            skilled in React, Next.js, and modern web design. I love building
            interactive and user-friendly applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-full shadow hover:bg-blue-800 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black rounded-full shadow hover:bg-blue-900 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
