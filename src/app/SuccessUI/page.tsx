"use client";

import Link from "next/link";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { motion } from "framer-motion";

const Page = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6 text-zinc-500">
      <Confetti width={width} height={height} />
      <motion.h3
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl font-bold text-green-600"
      >
        🎉 Integration Successful!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-2"
      >
        Your chatbot is now live.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full max-w-xs mt-4"
      >
        <Link href="/AdminPanel">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-success w-full"
          >
            Explore Admin Panel
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-full max-w-xs mt-2"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-outline w-full"
          onClick={() => alert("Sharing Feature Coming Soon!")}
        >
          Share on Social Media
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Page;
