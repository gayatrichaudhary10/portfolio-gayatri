import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  const stats = [
    { id: 1, label: "Projects Delivered", value: "4+" },
    { id: 2, label: "Client-Based Systems", value: "4+" },
    { id: 3, label: "Years Experience", value: "1" },
    { id: 4, label: "Technologies Worked On", value: "10+" },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
          style={{ marginBottom: "30px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
           style={{marginLeft:"20px", marginRight:"20px"}}>
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
    <motion.p
  variants={itemVariants}
  className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"

>
  I worked as a{" "}
  <span className="text-blue-400 font-semibold">Junior Software Developer</span>{" "}
  at{" "}
  
    Mindspace Software Technologies
 
  , contributing to client-based{" "}
 B2B eCommerce
  platforms and{" "}
 
    Workflow Automation Systems
.
</motion.p>

<motion.p
  variants={itemVariants}
  className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
>
  I specialize in building scalable React.js, Next.js applications with
  TypeScript and REST API integration.
  <br />
  I focus on translating complex business logic into efficient digital web
  solutions, ensuring clean architecture, performance optimization, and
  seamless user experience.
</motion.p>

<motion.p
  variants={itemVariants}
  className="text-sm sm:text-base md:text-lg leading-relaxed"
>
  I hold a{" "}
  <span className="text-blue-400 font-semibold">
    Bachelor of Engineering  (Electronics & Telecommunication)
  </span>{" "}
  from Shivajirao S. Jondhale College of Engineering (2020–2024).
</motion.p>

<motion.p
  variants={itemVariants}
  className="text-lg leading-relaxed"
>
  <span className="text-cyan-400  text-xl">
    Currently Open to Opportunities
  </span>{" "}
  as a Frontend Developer where I can contribute to impactful
  products and grow with a forward-thinking organization.
</motion.p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -6 }}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 sm:p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-100 font-semibold text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;