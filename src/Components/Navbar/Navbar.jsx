import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <motion.img
        src={logo}
        alt="Logo"
        whileHover={{ scale: 1.1 }}
        className="h-10 w-auto cursor-pointer"
      />

      <img
        src={menu_open}
        onClick={openMenu}
        alt=""
        className="block md:hidden w-6 cursor-pointer"
      />

      <ul
        ref={menuRef}
        className="fixed md:static top-0 -right-[350px] md:right-0 h-screen md:h-auto 
        bg-white md:bg-transparent md:flex items-center gap-8 p-12 md:p-0 transition-all duration-300"
      >
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="block md:hidden absolute top-4 right-4 w-6 cursor-pointer"
        />

        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About Me" },
          { href: "#services", label: "Services" },
          { href: "#work", label: "Portfolio" },
          { href: "#contact", label: "Contact" },
        ].map((item) => (
          <motion.li
            key={item.label}
            whileHover={{ scale: 1.05 }}
            className="relative list-none my-6 md:my-0"
          >
            <AnchorLink
              className="inline-block relative group"
              href={item.href}
              offset={item.href === "#home" ? 0 : 50}
            >
              <motion.p
                onClick={() => setMenu(item.href.slice(1))}
                className={`text-base font-medium px-3 py-2
                  ${menu === item.href.slice(1) ? "text-blue-600" : "text-gray-700"}
                  hover:text-blue-600 transition-colors duration-300`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left
                  transition-transform duration-300 scale-x-0
                  ${menu === item.href.slice(1) ? "scale-x-100" : ""}
                  group-hover:scale-x-100`}
                ></span>
              </motion.p>
            </AnchorLink>
          </motion.li>
        ))}
      </ul>

      <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
        <AnchorLink
          className="inline-block px-6 py-2.5 text-white bg-blue-600 rounded-full
            hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg
            text-sm font-medium"
          offset={50}
          href="#contact"
        >
          Connect with Me
        </AnchorLink>
      </motion.div>
    </div>
  );
};

export default Navbar;
