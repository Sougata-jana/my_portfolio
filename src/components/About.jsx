import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'JavaScript', level: '85%' },
    { name: 'React', level: '80%' },
    { name: 'HTML/CSS', level: '90%' },
    { name: 'Node.js', level: '75%' },
    { name: 'Python', level: '70%' },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-blue-300 to-teal-400 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-300">Sougata jana</span> 👋
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          A passionate developer crafting beautiful digital experiences
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Sougata-jana" className="text-yellow-300 hover:text-white transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sougata-jana-98b14828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-yellow-300 hover:text-white transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/jana_souga57648?t=9MOqzT-hP4GVNtc7j2Tgqg&s=09" className="text-yellow-300 hover:text-white transition duration-300">
            <FaTwitter size={24} />
          </a>
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
      >
        <h2 className="text-2xl font-bold text-purple-700 mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hello! I'm a passionate Web Developer and a Thard-year B.Tech student specializing in Computer Science and Engineering. I enjoy turning ideas into reality through clean, efficient, and responsive web applications. From building simple landing pages to full-stack projects, I love every step of the development process..
        </p>
        <p className="text-gray-700">
          I’m always eager to learn new technologies and stay updated with the latest trends in web development. My current focus is on mastering the MERN stack (MongoDB, Express.js, React, Node.js)
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
      >
        <h2 className="text-2xl font-bold text-purple-700 mb-6">My Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="bg-purple-500 h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fun Facts Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">🎯 Current Goal</h3>
            <p className="text-gray-700">Learning [Backend]</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">💻 Favorite Editor</h3>
            <p className="text-gray-700">VS Code</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">🎮 Hobbies</h3>
            <p className="text-gray-700">[Playing Cricket, Listien Song]</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">🌟 Dream Project</h3>
            <p className="text-gray-700">[Nathing]</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}