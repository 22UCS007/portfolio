
import { FaCalculator, FaMusic, FaBriefcase, FaRobot, FaLeaf } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation"; // your hook that adds is-visible class

const projects = [
  {
    icon: <FaCalculator className="text-4xl text-purple-600" />,
    title: "Academic Calculator",
    description:
      "A responsive tool for calculating SGPA and CGPA, built using HTML, CSS, and JavaScript. Designed to simplify academic grading workflows.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://cgpasgpacalc.netlify.app/",
  },
  {
    icon: <FaMusic className="text-4xl text-blue-500" />,
    title: "Music Player",
    description:
      "A web-based music player with features like play, pause, skip, volume control, and local folder access, offering a sleek and interactive experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://musicplayerwebapplication.netlify.app/",
  },
  {
    icon: <FaBriefcase className="text-4xl text-green-600" />,
    title: "CareerHorizon",
    description:
      "A job portal for posting/searching jobs and internships with admin/superadmin roles, localStorage-based authentication, and request approval system.",
    tech: ["React", "TailwindCSS", "Vite"],
    url: "#",
  },
  {
    icon: <FaLeaf className="text-4xl text-green-500" />,
    title: "Potato Leaf Disease Detection",
    description:
      "A deep learning model to detect diseases in potato leaves using image classification techniques powered by TensorFlow, Keras, and Pandas.",
    tech: ["Python", "TensorFlow", "Keras", "Pandas"],
    url: "https://plant-leaf-disease-detection-system.streamlit.app/",
  },
  {
    icon: <FaRobot className="text-4xl text-amber-600" />,
    title: "Micromouse Grid Pathfinder",
    description:
      "A visual pathfinding simulation where users select start, end, and blocked cells in a grid. Uses Floyd-Warshall algorithm to find shortest path.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://679133f7d4eee70761aa97ed--quiet-dragon-92dd19.netlify.app/",
  },
];

const Projects = () => {
  useScrollAnimation(); // activates animation on elements with scroll-animate class

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-teal-100 via-white to-teal-100 py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-animate-left flex flex-col items-center bg-slate-50 p-6 shadow-lg shadow-teal-500 rounded-2xl hover:shadow-teal-700 transition duration-300"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white border rounded-full shadow">
                  {project.icon}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="text-sm bg-teal-50 font-semibold text-teal-600 px-2 py-1 rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-teal-600 text-white font-bold px-6 py-2 rounded-full hover:bg-teal-700 transition"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
