import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
// import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero pt-10">
      <img src={profile_img} alt="" />
      <h1>
        <span className="bg-red-500 text-amber-900">
          Hello I'm Gemechu hunduma 👋
        </span>
      </h1>
      <h2>Full-Stack Developer | Software Engineer at Haramaya University</h2>

      <p>
        I specialize in building clean, responsive, and scalable web
        applications. With 2+ years of experience, I turn ideas into powerful
        digital solutions.
      </p>

      <div className="hero-action">
        <div className="hero-connect">📄 Download CV</div>
        <div className="hero-resume">💬 Let’s Connect</div>
      </div>
    </div>
  );
};

export default Hero;
