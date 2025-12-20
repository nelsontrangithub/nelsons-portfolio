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
            height={200}
            quality={100}
            alt="Nelson Tran"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="welcome-description">
          I am a senior software engineer based in Vancouver, British Columbia, specializing in
          building high-quality, scalable web user interfaces. I have deep experience with
          TypeScript, React, and modern JavaScript, and a strong background working with .NET-based
          services to deliver performant, accessible, and maintainable applications.
          <br />
          <br />
          Check out my <AnchorLink href="#projects">side-projects</AnchorLink> below.
        </div>
      </div>
    </div>
  );
};

export default Welcome;
