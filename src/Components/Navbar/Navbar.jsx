import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import {
  GithubIcon,
  LinkedinIcon,
  UpworkIcon,
} from "../../assets/social_icons";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      menuRef.current.style.right = "0";
    } else {
      menuRef.current.style.right = "-350px";
    }
  };

  const handleLinkClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false);
    menuRef.current.style.right = "-350px";
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <img src={logo} alt="" />
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt=""
        className={`nav-mob-open ${isMenuOpen ? "hidden" : ""}`}
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={toggleMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleLinkClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleLinkClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleLinkClick("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleLinkClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleLinkClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <UpworkIcon />
          </a>
        </div>
      </ul>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <UpworkIcon />
          </a>
        </div>
      </div>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
