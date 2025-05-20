import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
import profile_img from "../../assets/profile.jpg";
import { FiDownload } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";


const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden  "
    >
      <div className="animated-background">
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>
        {/* <div className="floating-text">Connect with me</div>
        <div className="floating-text text2">Let's build something amazing</div> */}
      </div>

      {/* background bollon  */}

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="relative inline-block mb-10"
      >
        <img
          src={profile_img}
          alt="Profile"
          className="w-60 h-60 rounded-full sm:rounded-full mx-auto object-cover border-4 border-blue-500 drop-shadow-blue-300"
        />
        {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 animate-pulse"></div> */}
      </motion.div>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
          Hello I'm Gemechu hunduma 👋
        </span>
      </motion.h1>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="role-text text-xl sm:text-xl md:text-2xl text-gray-300 mb-8"
      >
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "Software Engineer at Haramaya University",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ display: "inline-block" }}
        />
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=" text-gray-400 text-base font-semibold sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        I build clean, fast, and scalable web apps. With 2+ years of experience,
        I turn your ideas into powerful digital solutions.
      </motion.p>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hero-action mt-10"
      >
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg mx-auto"
        >
          {/* Download CV */}
          <motion.a
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 12px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            className="group w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        text-white rounded-xl font-semibold flex items-center justify-center gap-3 px-8 py-3 
        shadow-lg transition-all duration-300 hover:shadow-purple-500/40"
          >
            <FiDownload className="text-xl group-hover:animate-bounce transition-all"/>
            <span className="tracking-wide">Download CV</span>
          </motion.a>

          {/* Let's Connect */}
          <motion.a
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 10px rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group w-full sm:w-auto px-8 py-3 bg-white/10 backdrop-blur-sm text-white 
        rounded-xl font-semibold flex items-center justify-center gap-3 
        border border-white/20 hover:border-white/30 hover:bg-white/15 
        shadow-lg transition-all duration-300"
          >
            <BiMessageDetail className="text-xl transition-transform group-hover:-rotate-6" />
            <span className="tracking-wide">Let's Connect</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
