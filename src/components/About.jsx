// import { useState } from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   const [showMore, setShowMore] = useState(false);

//   const fullText = `I'm Sagnik Das, a passionate aspiring software developer on the brink of launching into the professional world. Currently pursuing my B.Tech in Computer Science in Pre-final Year at NIT Agartala.

// Proficient in Data Structures and Algorithms, Competitive Programming, Web Development, and Machine Learning, I'm eager to explore and excel in these realms while continually adding new skills to my arsenal. I am well versed with Computer Science fundamentals like OOPS, Operating Systems, Database Management Systems, Computer Networks and also have keen interest in System Design. I am enthusiastic about collaboration and open to exciting opportunities that foster growth and innovation. Let's connect and create something remarkable together.`;

//   const shortText = fullText.split(".").slice(0, 3).join(".") + ".";

//   return (
//     <section
//       id="about"
//       className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-teal-100 px-6 md:px-12 py-20 flex items-center justify-center"
//     >
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side Photo with animation */}
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="flex justify-center md:justify-start"
//         >
//           <img
//             src="/sagnik-photo.jpg"
//             alt="Sagnik Das"
//             className="w-72 h-80 object-cover rounded-3xl border-4 border-teal-500 shadow-xl"
//           />
//         </motion.div>

//         {/* Right Side Text with animation */}
//         <div className="p-8 bg-gray-100 rounded-3xl shadow-lg shadow-teal-600">
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//         >
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
//           <h3 className="text-2xl text-teal-600 font-semibold mb-4">
//             Aspiring Software Developer
//           </h3>
//           <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//             {showMore ? fullText : shortText}
//           </p>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="mt-4 inline-block bg-teal-600 text-white px-6 py-2 rounded-full shadow-lg shadow-teal-300 transform transition duration-300 hover:scale-105 hover:bg-teal-700"
//           >
//             {showMore ? "Read Less" : "Read More"}
//           </button>
//         </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const fullText = `I'm Sagnik Das, a passionate aspiring software developer on the brink of launching into the professional world. Currently pursuing my B.Tech in Computer Science in Pre-final Year at NIT Agartala.

Proficient in Data Structures and Algorithms, Competitive Programming, Web Development, and Machine Learning, I'm eager to explore and excel in these realms while continually adding new skills to my arsenal. I am well versed with Computer Science fundamentals like OOPS, Operating Systems, Database Management Systems, Computer Networks and also have keen interest in System Design. I am enthusiastic about collaboration and open to exciting opportunities that foster growth and innovation. Let's connect and create something remarkable together.`;

  const shortText = fullText.split(".").slice(0, 3).join(".") + ".";

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-teal-100 px-6 md:px-12 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Photo with animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/sagnik-photo.jpg"
            alt="Sagnik Das"
            className="w-72 h-80 object-cover rounded-3xl border-4 border-teal-500 shadow-xl"
          />
        </motion.div>

        {/* Right Side Text with animation */}
        <div className="p-8 bg-gray-100 rounded-3xl shadow-lg shadow-teal-600">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              Aspiring Software Developer
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {showMore ? fullText : shortText}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 inline-block bg-teal-600 text-white px-6 py-2 rounded-full shadow-lg shadow-teal-300 transform transition duration-300 hover:scale-105 hover:bg-teal-700"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
