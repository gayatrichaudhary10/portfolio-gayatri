import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Junior Software Developer ";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500 rounded-full blur-3xl"
        
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Gayatri</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6 h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center"
        >
          {displayedText}
          <span className="ml-2 animate-pulse">|</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8 px-2 leading-relaxed"
        >
          I create stunning, responsive web experiences with cutting-edge technologies.
          Let's build something amazing together!
        </motion.p>

        <motion.div
          variants={itemVariants}
      className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4  sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-blue-500 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-600 transition-colors  sm:w-auto"
             style={{padding:"5px"}}
          >
            View My Work
          </motion.button>
         <motion.a
  href="Gayatri_Chaudhary_Resume.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-sm sm:text-base hover:bg-cyan-400/10 transition-colors sm:w-auto"  style={{padding:"5px"}}
>
  Download CV
</motion.a>
        </motion.div>

     
      </motion.div>
    </section>
  );
};

export default Hero;
