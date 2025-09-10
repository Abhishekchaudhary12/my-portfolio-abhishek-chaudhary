import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 bg-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/cc/1f/b7/cc1fb7bcd875829e016848e94e2d1926.jpg')",
        backgroundPosition: "right center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row">
        {/* Left Side (Timeline) */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-12 text-black md:text-left text-center">Experience</h2>

          <div className="relative border-l border-blue-500">
            {experience.map((item, i) => (
              <div key={i} className="mb-10 ml-6">
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-2.5 -left-1.5 border border-white"></div>

                <h3 className="text-xl font-semibold text-blue-600">
                  {item.role}
                </h3>
                <span className="block text-sm text-black">
                  {item.company} • {item.period}
                </span>
                <p className="mt-2 text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side (Empty space for image to show) */}
        <div className="hidden md:block w-1/3"></div>
      </div>
    </section>
  );
}
