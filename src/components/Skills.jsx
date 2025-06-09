
import {
  FaCode,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  {
    icon: <MdWork className="text-4xl text-blue-600" />,
    title: "Intern at Techsaksham",
    description: "Completed an AI internship developing a deep learning model to detect potato leaf diseases using TensorFlow, Keras, and Pandas.",
  },
  {
    icon: <SiCplusplus className="text-4xl text-purple-600" />,
    title: "C & C++ (Intermediate)",
    description: "Proficient in C and C++, solving complex problems using core programming concepts.",
  },
  {
    icon: <FaCode className="text-4xl text-green-600" />,
    title: "Data Structures & Algorithms",
    description: " have keen interest in Competitive Programming and have a strong foundation in Data Structures & Algorithms.I practice on platforms like Leetcode,Codechef etc.",
  },
  {
    icon: (
      <div className="flex space-x-1 text-3xl">
        <SiHtml5 className="text-orange-600" />
        <SiCss3 className="text-blue-600" />
        <SiJavascript className="text-yellow-500" />
        <SiReact className="text-blue-400" />
        <SiTailwindcss className="text-cyan-500" />
      </div>
    ),
    title: "Frontend Web Development",
    description: "I have keen interest in Frontend development using technologies like HTML, CSS, Javascript, Reactjs, tailwind css etc. ",
  },
  {
    icon: <FaDatabase className="text-4xl text-pink-500" />,
    title: "Computer Fundamentals",
    description: "I have strong foundation of computer fundamentals like Operating System, Database Management System, Computer Networks, Object Oriented Programming etc. ",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-indigo-600" />,
    title: "System Design",
    description: "I have a keen interest in System Design components, High level design etc. Understanding of scalable architecture, microservices, caching, and more.",
  },
];

const Skills = () => {
  useScrollAnimation();

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-teal-100 via-white to-teal-100 py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 scroll-animate">
          My Skills and Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg shadow-teal-600 hover:shadow-teal-700  transition duration-300 scroll-animate opacity-0"
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-700">
                {skill.title}
              </h3>
              <div className="mb-4 flex justify-center ">{skill.icon}</div>
              
              <p className="text-gray-800">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
