import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <motion.div
        className="h-screen w-screen flex flex-col items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/6274202.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold drop-shadow-xl text-white mb-6"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
        >
          YOUR NAME 6
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Coming soon. Stay tuned.
        </motion.p>

        <motion.a
          href="#content"
          className="px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:scale-105 transition"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          Enter
        </motion.a>
      </motion.div>

      <div id="content" className="p-6 md:p-12 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-white/80 mb-6">
            I'm building something epic. This space will soon be filled with awesome content, stories, and maybe a bit of chaos.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
