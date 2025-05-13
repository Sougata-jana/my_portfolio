import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import appwriteConfi from '../appwrite/appwriteConfig';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await appwriteConfi.getProjects();
        console.log('Fetched projects:', response); // Debug response
        if (response) {
          console.log('Documents:', response); // Log the documents array
          setProjects(response); // Set the projects state
        } else {
          console.error('No documents found in response:', response);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-blue-300 to-teal-400">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-blue-300 to-teal-400 px-6 py-12 scroll-smooth">
      <motion.h3
        className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <motion.div
              key={project.$id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={appwriteConfi.getFilePreview(project.img)}
                alt={project.title || 'No Title'}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-500 transition duration-300">
                  {project.title || 'Untitled Project'}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description || 'No description available.'}
                </p>
                <a
                  href={project.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-500 hover:to-blue-500 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-200 text-lg">No projects found. Check back later!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}