import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col md:flex-row"
    >
      {/* Left Side: Skills content */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 py-16 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-10 drop-shadow">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-black/80 backdrop-blur shadow-md rounded-full text-white font-medium hover:bg-blue-500 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side: Background image */}
      <div
        className="absolute inset-0 md:relative md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/cc/1f/b7/cc1fb7bcd875829e016848e94e2d1926.jpg')",
        }}
      >
        <div className="w-full h-full bg-white/30"></div> {/* overlay for readability */}
      </div>
    </section>
  );
}
