import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-blue-300 to-teal-400 text-white">
      {/* Hero Section */}
      <div className="w-full px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Text Content */}
          <motion.div
            className="w-2xl text-center md:text-left "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-8">
              Hi, I'm{' '}
              <span className="text-yellow-300">
                <Typewriter
                  words={['SOUGATA JANA', 'a Full Stack Developer', 'a Problem Solver']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl mb-8">
              A passionate Full Stack Developer specializing in building exceptional digital experiences.
              Currently focused on building responsive web applications.
            </p>
            <div className="space-x-4">
              <Link
                to="/projects"
                className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <div className='pr-25'>

          <motion.img
            src="/my_pic.jpeg" // Replace with the actual path to your image
            alt="Profile"
            className="w-60 h-80  rounded-3xl shadow-lg hover:shadow-teal-900 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            />
            </div>
        </div>
      </div>
    </div>
  );
}