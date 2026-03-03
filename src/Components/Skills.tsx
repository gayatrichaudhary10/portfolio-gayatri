import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {

 const skills = [
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Material UI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Bitbucket", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-slate-900 to-slate-900 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-8xl mx-auto">

        {/* KEEPING YOUR HEADER SAME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <div className="text-center w-full" style={{ marginTop: "40px" ,marginBottom:"30px"}}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
          </div>
          <div
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"
            style={{ marginBottom: "20px" }}
          />
        </motion.div>

        {/* Skills Cards Grid */}
      {/* Skills Cards Grid */}
<div className="flex justify-center">
  <div
    className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-5
      gap-4 sm:gap-6 md:gap-8
      w-full
      max-w-5xl
      px-2 sm:px-4
    "
    
  >
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="
  bg-slate-800
  border border-slate-700
  rounded-xl
  px-6 py-6 sm:px-8 sm:py-8
  flex flex-col items-center justify-center
  hover:border-slate-500 hover:bg-slate-700
  transition-all duration-300
  
"
style={{padding:"5px"}}
      >
        <img
          src={skill.img}
          alt={skill.name}
          className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-3 sm:mb-4"
        />
        <p className="text-xs sm:text-sm text-slate-300 font-medium text-center">
          {skill.name}
        </p>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;