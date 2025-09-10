export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row"
    >
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/cc/1f/b7/cc1fb7bcd875829e016848e94e2d1926.jpg')",
        }}
      >
        <div className="w-full h-full bg-white/30"></div> {/* Overlay */}
      </div>

      {/* Content (on top of background) */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 py-16 flex flex-col justify-center md:text-left text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black drop-shadow mb-6">
          About Me
        </h2>

        <p className="text-black leading-relaxed text-lg mb-4">
          I’m a passionate <span className="font-semibold">Frontend Developer</span> 
          with a love for building clean, responsive, and user-friendly web applications. 
          I enjoy working with{" "}
          <span className="text-blue-600">Next.js</span>,{" "}
          <span className="text-blue-600">React</span>, and{" "}
          <span className="text-blue-600">Tailwind CSS </span> 
          to craft delightful digital experiences.
        </p>

        <p className="text-black leading-relaxed text-lg mb-4">
          I completed my{" "}
          <span className="font-semibold text-black">B.Tech in Computer Science</span>{" "}
          from <span className="font-semibold text-black">GLA University, Mathura</span>.
        </p>

        <p className="text-gray-900 leading-relaxed text-lg">
          Beyond coding, I love learning new technologies, exploring design trends,
          and collaborating on creative projects that make a positive impact.
        </p>
      </div>
    </section>
  );
}
