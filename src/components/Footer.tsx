import React from "react";
import "../styles/Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <span>Nelson Tran © {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
