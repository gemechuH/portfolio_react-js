import React, { useRef, useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
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
      className={`fixed top-0 left-0 w-full px-4 md:px-8 py-4 bg-dark backdrop-blur-sm shadow-lg transition-transform duration-300 z-50 text-white ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={logo} alt="Logo" className="h-10 w-auto" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
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
                    className="text-white hover:text-orange-400 transition-colors text-xl font-semibold"
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
        </div>

        {/* Social Icons & Connect Button - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 hover:scale-110 transition-all"
            >
              <UpworkIcon />
            </a>
          </div>

          <AnchorLink
            href="#contact"
            className="nav-connect 
              transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Connect with Me
          </AnchorLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <img
            src={isMenuOpen ? menu_close : menu_open}
            alt="menu"
            className="w-6 h-6"
          />
        </button>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className="fixed top-0 -right-[350px] w-[300px] h-screen bg-dark shadow-2xl 
            transition-all duration-300 z-50 md:hidden"
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <button onClick={toggleMenu}>
                <img src={menu_close} alt="close" className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
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
              <div className="flex justify-center gap-4 mb-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 hover:scale-110 transition-all"
                >
                  <UpworkIcon />
                </a>
              </div>

              <AnchorLink
                href="#contact"
                className="block text-center bg-blue-600 text-white px-6 py-2 rounded-full 
                  hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                onClick={toggleMenu}
              >
                Connect with Me
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
