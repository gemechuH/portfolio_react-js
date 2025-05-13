import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
// import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero pt-10">
      <img src={profile_img} alt="" />
      <h1>
        <span className="bg-red-500 text-amber-900">I'm Gemechu hunduma,</span>
      </h1>
      <h2>Software Engineer At Haramaya University</h2>
      <h3>Profession: Full stack developer.</h3>
      
      <div className="hero-action">
        
        <div className="hero-connect">Download CV</div>
        <div className="hero-resume">My Resume</div>
      </div>
      
    </div>
  );
};

export default Hero;
