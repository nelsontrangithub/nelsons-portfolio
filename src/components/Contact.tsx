import React from "react";
import "../styles/Contact.scss";

export const Contact: React.FC = () => {
  return (
    <div className="contact-links">
      <span>
        <a rel="noopener" target="_blank" href="mailto:nelsontran@icloud.com">
          nelsontran@icloud.com
        </a>
      </span>
      <span>
        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/nelsontran/">
          LinkedIn
        </a>
      </span>
      <span>
        <a rel="noopener" target="_blank" href="https://github.com/nelsontrangithub/">
          Github
        </a>
      </span>
    </div>
  );
};

export default Contact;
