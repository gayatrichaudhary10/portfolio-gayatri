import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

const contactInfo = [
  { 
    icon: <FaEnvelope />, 
    label: "Email", 
    value: "gayatric1012@gmail.com", 
    href: "mailto:gayatric1012@gmail.com" 
  },
  { 
    icon: <FaLinkedin />, 
    label: "LinkedIn", 
    value: "linkedin.com/in/gayatri-chaudhary-917576237", 
    href: "https://www.linkedin.com/in/gayatri-chaudhary-917576237/" 
  },
  { 
    icon: <FaPhone />, 
    label: "Mobile", 
    value: "9320601019",
    href: "tel:9320601019"
  }
];

  return (
<section id="contact" className="bg-gradient-to-b from-slate-900 to-slate-900  py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8" style={{marginBottom:"5%"}}>  
      <div className="max-w-8xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{marginTop:"40px",marginBottom:"30px"}}>
         Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4" />
          
        </motion.div>

<div style={{marginTop:"20px",marginLeft:"20px",marginRight:"20px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start" >
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
             <p style={{marginBottom:"10px"}}>I'm currently seeking Entry-level Software Developer / Frontend Developer Role. Let's Connect</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-slate-800/40 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-slate-700 rounded-lg text-xl sm:text-2xl group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{info.label}</p>
                    <p className="text-white font-medium truncate text-xs sm:text-sm md:text-base">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

     
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;