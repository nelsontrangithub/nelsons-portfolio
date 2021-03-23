import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/Welcome.scss";
import TypingTitle from "./TypingTitle";
import { StaticImage } from "gatsby-plugin-image";

const Welcome: React.FC = ({}) => {
  return (
    <div className="welcome-container">
      <TypingTitle title="Nelson Tran" />
      <div className="welcome-row">
        <div className="welcome-image">
          <StaticImage
            src="../images/avatar.png"
            width={200}
            quality={100}
            alt="Nelson Tran"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="welcome-description">
          I am a Full Stack Software Developer based in Vancouver, British Columbia, Canada.
          Experienced in C#, .NET CORE, JavaScript, TypeScript, and ReactJS.
          <br />
          <br />
          Check out my <AnchorLink href="#projects">side-projects</AnchorLink> below.
        </div>
      </div>
    </div>
  );
};

export default Welcome;
