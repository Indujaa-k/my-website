import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main Header */}
      {!menuOpen && (
        <div className="header">
          <div className="header-text">I</div>
          <div className="header-link">
            <div className="header-link-text">
              <a href="#work">Work</a>
            </div>
            <div className="header-link-text">
              <a href="#about">About</a>
            </div>
            <div className="header-link-text">
              <a href="#contact">Contact</a>
            </div>
            <div className="header-link-icon">
              <a
                href="https://www.linkedin.com/in/indujaa-k/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="header-link-icon">
              <a
                href="https://github.com/Indujaa-k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="header-menu">
            <CiMenuFries onClick={toggleMenu} />
          </div>
        </div>
      )}

      {/* Full-Screen Menu */}
      {menuOpen && (
        <div className={`header-menu-links show`}>
          <div className="header-menu-sec1">
            <div className="header-menu-logo">I</div>
            <div className="icon" onClick={toggleMenu}>
              <IoMdClose />
            </div>
          </div>
          <div className="header-menu-sec2">
            <div className="header-menu-text">
              <a href="#work" onClick={toggleMenu}>
                Work
              </a>
            </div>
            <div className="header-menu-text">
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </div>
            <div className="header-menu-text">
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </div>
            <div className="header-menu-icon">
              <a
                href="https://www.linkedin.com/in/indujaa-k/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
             <div className="header-menu-icon">
              <a
                href="https://github.com/Indujaa-k"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
