import * as React from "react";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
