import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <AnchorLink href="#projects">Projects</AnchorLink>
        <AnchorLink href="#contact">Contact</AnchorLink>
      </nav>
    </div>
  );
};

export default Navbar;
