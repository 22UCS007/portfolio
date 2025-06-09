import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-white to-teal-100 px-6 md:px-12 pt-28"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <div className="bg-gray-100 shadow-lg shadow-teal-600 p-8 rounded-3xl">
          <motion.h1
            className="text-3xl font-bold text-gray-800 mb-2 leading-tight"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={1}
          >
            Hello, it's me
          </motion.h1>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-teal-700 mb-6"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={2}
          >
            Sagnik Das
          </motion.h2>

          <motion.p
            className="text-xl text-teal-500 font-bold mt-6 mb-4"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={3}
          >
            Pre-Final Year Computer Science Undergrad at NIT Agartala
          </motion.p>

          <motion.p
            className="text-lg text-black mb-6 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={4}
          >
            Welcome to my portfolio! <br />
            I'm passionate about software development and excited to showcase my skills and projects.
            Beyond my technical abilities, I'm an effective communicator, multitasker, and team builder.
            I’m looking for opportunities that help me grow while making an impact. <br />
            <span className="font-medium text-teal-500">Let’s explore and connect!</span>
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-5 mb-6 text-2xl text-gray-700"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={5}
          >
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
              <FaFacebook className="text-blue-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
              <FaInstagram className="text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
              <FaTwitter className="text-sky-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
              <FaLinkedin className="text-blue-700" />
            </a>
          </motion.div>

          {/* CV Button */}
          <a
           href="/SagnikDas_CV.pdf"
           download
           className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full shadow-lg shadow-teal-300 transform transition duration-300 hover:scale-105 hover:bg-teal-700"
          >
          Download CV
          </a>

        </div>

        {/* Right Side Image */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex justify-center md:justify-end"
        >
          <motion.img
            src="/sagnik-photo.jpg"
            alt="Sagnik Das"
            className="w-72 h-80 object-cover rounded-full border-8 border-teal-600 shadow-lg shadow-teal-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
