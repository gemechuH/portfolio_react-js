import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";


const Hero = () => {
  return (
    <div id="home" className="hero pt-20 ">
      {/* <div className="animated-background">
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>
        <div className="floating-text">Connect with me</div>
        <div className="floating-text text2">Let's build something amazing</div>
      </div> */}


      {/* background bollon  */}
  


      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={profile_img}
        alt="Profile"
        className="profile-image"
      />
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="gradient-text">Hello I'm Gemechu hunduma 👋</span>
      </motion.h1>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="role-text"
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
        className="description-text"
      >
        I specialize in building clean, responsive, and scalable web
        applications. With 2+ years of experience, I turn ideas into powerful
        digital solutions.
      </motion.p>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hero-action"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-connect hover-effect"
        >
          📄 Download CV
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-resume hover-effect"
        >
          💬 Let's Connect
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
