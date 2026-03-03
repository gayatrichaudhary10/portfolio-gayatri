import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about", "projects", "skills", "contact"];

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const id of navItems) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md z-50 border-b border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleScroll("home")}
            style={{marginLeft:"20px"}}
          >
           Gayatri Chaudhary
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 lg:gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleScroll(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg capitalize transition-all duration-300 text-sm sm:text-base ${
                  active === item
                    ? "bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/50"
                    : "text-gray-300 hover:text-white"
                }`}
                  style={{padding:"5px",marginLeft:"30px",marginRight:"10px"}}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-xl sm:text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 sm:gap-4 py-3 sm:py-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className={`capitalize text-left px-2 text-sm sm:text-base ${
                  active === item
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300"
                }`}
                 
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;