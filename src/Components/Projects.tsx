import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Jagatjit – B2B eCommerce Platform",
      description:
        "Developed a scalable B2B eCommerce system for tractor implements & spare parts with hierarchical role management and workflow automation.",
      tags: ["Role-Based Access Control", , "React", "REST APIs", "JQWidgets", "MUI"],
      color: "from-blue-500 to-cyan-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQ3Vum-uDhpiyCXjSadz8t7n3mBje3vNflw&s",
      link: "https://jagatjit.mindspacetech.com/",
    },
    {
      title: "TourPlan – Admin Hierarchy & Meeting Planner",
      description:
        "Designed admin dashboard with hierarchical user management, calendar-based planning, and route/task tracking system.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQ3Vum-uDhpiyCXjSadz8t7n3mBje3vNflw&s",
      tags: ["React", "Next.js", "Role-Based Access Control", "User Hierarchy Management"],
      color: "from-green-500 to-emerald-500",
      link: "https://tourplan.mindspacetech.com/login",
    },
    {
      title: "iEXP360 – Quotation & Tour Planning System",
      description:
        "Built quotation automation and multi-step tour planning system with dynamic pricing logic and approval workflows.",
      tags: ["React", "TypeScript", "Real-Time Calculations", "Workflow Automation", "JQWidgets", "MUI"],
      color: "from-purple-500 to-indigo-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yHC8vqko9TUfx82VxeJz-3erF63YB437Rg&s",
      link: "https://iexpdev.mindspacetech.com/",
    },
    {
      title: "Boon Edam – Service Receipt Workflow",
      description:
        "Developed frontend workflow system for customer service engineer receipt management and process tracking.",
      tags: ["React", "Workflow UI", "Component Architecture", "REST APIs"],
      color: "from-pink-500 to-rose-500",
      image: "https://www.sourcesecurity.com/img/news/612/boon-edam-920x533.jpg",
      link: "https://boonedam.mindspacetech.com/login",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-900 to-slate-900 py-20 sm:py-24 px-4 overflow-hidden"
    >
<div className="max-w-8xl mx-auto flex flex-col items-center">        
        {/* Header with your 30px margin */}
        <div className="text-center w-full" style={{ marginBottom: "30px" ,marginTop:"30px"}}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
           Latest <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"/>
        </div>

        {/* FIX: Added 'justify-center' to the grid container 
            and 'mx-auto' to the motion div itself.
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center"        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
   className="w-full max-w-[310px] sm:max-w-sm mx-auto bg-gradient-to-br from-slate-700/50 to-slate-800/80 rounded-tl-2xl rounded-br-2xl overflow-hidden border border-slate-600/50 flex flex-col h-full shadow-2xl"
        style={{
    marginLeft: window.innerWidth < 640 ? "40px" : "0px"
  }}
       >
              {/* Reduced image height for mobile (h-32) */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
className="w-full h-50 object-contain bg-slate-100"                />
              ) : (
                <div className={`h-20 sm:h-50 bg-gradient-to-r ${project.color} opacity-80`} />
              )}

              {/* Inner Content with generous spacing */}
             <div className=" flex flex-col h-full" style={{padding:"20px"}}>

  {/* Title + Description */}
  <div className="mb-5">
    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug min-h-[48px]"
    style={{margin:"3px"}}>
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 min-h-[60px]" style={{margin:"3px"}}>
      {project.description}
    </p>
  </div>

  {/* Modern Tag UI */}
   <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-md text-[10px] sm:text-xs border border-blue-500/20"
                      style={{margin:"4px",padding:"2px 6px"}}
                    >
                      {tag}
                    </span>
                  ))}
         
  </div>

  {/* Button */}
  <div className="mt-auto">
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="  bg-gradient-to-r 
                 from-blue-600 to-cyan-600 
                 text-white rounded-xl 
                 font-semibold text-sm 
                 text-center block shadow-md
                 transition-transform duration-300
                 hover:scale-[1.02] mx-4"
              
    >
      View Project
    </motion.a>
  </div>

</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;