import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/cc/1f/b7/cc1fb7bcd875829e016848e94e2d1926.jpg')",
        backgroundPosition: "left center", // opposite side
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row">
        {/* Left side (Empty space for image to show) */}
        <div className="hidden md:block w-1/3"></div>

        {/* Right side (Projects Content) */}
        <div className="w-full md:w-2/3 md:text-right text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-black">
            Projects
          </h2>

          <div className="grid gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl shadow-md hover:shadow-xl transition bg-white/70 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-black">
                  {p.title}
                </h3>
                <p className="mt-2 text-gray-800">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-700 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
