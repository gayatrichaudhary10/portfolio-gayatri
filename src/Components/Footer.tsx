import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [

    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/gayatri-chaudhary-917576237/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:gayatric1012@gmail.com",
      label: "Email",
    },
    {
      icon: <FaPhone />,
      url: "tel:9320601019",
      label: "Phone",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
        

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4" style={{marginBottom:"5px"}}>Quick Links</p>
            <div className="flex justify-center gap-6 flex-wrap">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            
            <div className="flex justify-center md:justify-end gap-4" style={{marginTop:"20px",marginBottom:"20px"}}>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all text-lg"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">
            © {currentYear} Gayatri Chaudhary. All rights reserved.
          </p>
      
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;