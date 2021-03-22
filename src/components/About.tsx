import React from "react";
import { AboutType, abouts } from "../constants/about";
import "../styles/About.scss";

interface StatementProp {
  statement: AboutType;
}

const Statement: React.FC<StatementProp> = ({ statement }) => {
  return (
    <div className="statement">
      <div className="input-statement">{statement.input}</div>
      <div className="return-statement" dangerouslySetInnerHTML={{ __html: statement.return }} />
    </div>
  );
};

interface StatementsProp {
  statements: AboutType[];
}

const Statements: React.FC<StatementsProp> = ({ statements }) => {
  return (
    <div>
      {statements.map((statement, index) => {
        return <Statement statement={statement} key={index} />;
      })}
      <div className="statement">
        <div className="input-statement">
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="header-button red" />
          <div className="header-button yellow" />
          <div className="header-button green" />
        </div>
        <div className="terminal-window">
          <Statements statements={abouts} />
        </div>
      </div>
    </div>
  );
};

export default About;
