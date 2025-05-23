import React, { useRef, useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";
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
      className={`fixed top-1 left-3 w-full px-4 md:px-8 py-4 bg-dark backdrop-blur-sm shadow-lg transition-transform duration-300 z-50 text-white ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl  flex items-center">
        {/* Left section with logo and social icons */}
        <div className="flex items-center gap-4 md:gap-15">
          <img src={logo} alt="Logo" className="md:h-20 w-auto  rounded-full" />
          <div className="flex-1 flex justify-center md:flex">
            <div className="flex items-center gap-6 md:gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all p-4"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all p-4"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all p-4"
              >
                <UpworkIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Center navigation */}
        <ul className="hidden md:flex items-center justify-center flex-1 gap-12">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About Me", offset: 50 },
            { href: "#services", label: "Services", offset: 50 },
            { href: "#work", label: "Portfolio", offset: 50 },
            { href: "#contact", label: "Contact", offset: 50 },
          ].map((item) => (
            <li key={item.href}>
              <AnchorLink
                href={item.href}
                offset={item.offset || 0}
                className="relative group"
              >
                <p
                  onClick={() => handleLinkClick(item.href.slice(1))}
                  className="text-white hover:text-orange-400 transition-colors font-medium text-xl"
                >
                  {item.label}
                </p>
                {menu === item.href.slice(1) && (
                  <img src={underline} alt="" className="mt-1" />
                )}
              </AnchorLink>
            </li>
          ))}
        </ul>

        {/* Right section - Connect button */}
        <AnchorLink
          href="#contact"
          className="hidden md:flex bg-gradient-to-r from-orange-400 to-orange-600 
            px-6 py-2 rounded hover:shadow-lg transition-all duration-300 ml-8"
        >
          Connect with Me
        </AnchorLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-2 right-2 md:hidden text-2xl text-white"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className="fixed top-0 -right-[350px] w-[300px] h-[250px] bg-dark shadow-2xl 
            transition-all duration-300 z-50 bg-gradient-to-b from-gray-900 to-black md:hidden"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end mb-8 bg-dark">
            <button
              onClick={toggleMenu}
              className="text-2xl text-white hover:text-orange-400 transition-colors"
            >
              <HiX />
            </button>
          </div>

          <ul className="flex flex-col gap-4 ">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Me", offset: 50 },
              { href: "#services", label: "Services", offset: 50 },
              { href: "#work", label: "Portfolio", offset: 50 },
              { href: "#contact", label: "Contact", offset: 50 },
            ].map((item) => (
              <li key={item.href}>
                <AnchorLink
                  href={item.href}
                  offset={item.offset || 0}
                  className="relative group"
                  onClick={() => handleLinkClick(item.href.slice(1))}
                >
                  <p className="text-white hover:text-orange-300 transition-colors">
                    {item.label}
                  </p>
                  {menu === item.href.slice(1) && (
                    <img src={underline} alt="" className="mt-1" />
                  )}
                </AnchorLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <AnchorLink
              href="#contact"
              className="block text-center bg-gradient-to-r from-orange-400 to-orange-600 
                  px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              onClick={toggleMenu}
            >
              Connect with Me
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
