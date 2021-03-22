import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/Welcome.scss";
import TypingTitle from "./TypingTitle";

const Welcome: React.FC = ({}) => {
  return (
    <div className="welcome-container">
      <TypingTitle title="Nelson Tran" />
      <div className="welcome-description">
        Hi, my name is Nelson Tran. I am Full Stack Software Developer at Cadmakers based in
        Vancouver B.C, Canada.
        <br />
        Check out my <AnchorLink href="#projects">side-projects</AnchorLink> below.
      </div>
    </div>
  );
};

export default Welcome;
