"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <motion.div
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg text-center border border-white/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-bold mb-4 text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎉 Welcome to Your Admin Panel
        </motion.h2>

        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Manage your chatbot settings, track performance, and customize
          responses.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-lg font-semibold transition-all"
          >
            Go to Dashboard
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline border border-white/40 text-white py-3 px-5 rounded-lg font-semibold transition-all hover:bg-white/20"
          >
            Start Talking to Your Chatbot
          </motion.button>
        </motion.div>

        {/* Social Media Sharing Section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white">
            Share Your Success
          </h3>
          <p className="text-gray-400 text-sm">
            Let the world know about your chatbot!
          </p>

          <div className="flex justify-center gap-4 mt-3">
            {/* Animated Social Icons */}
            <motion.button
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-4xl text-blue-400 transition-all"
            >
              <FaTwitter />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="text-4xl text-blue-600 transition-all"
            >
              <FaLinkedin />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminPanel;
