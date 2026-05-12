import React from "react";
import { Link } from "react-router-dom";


const Footer = () => (
  <footer className="main-header-f">
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      
      <div className="main-footer">
        <p>
          <strong>Developed by </strong> 
        </p>
        <img src="/an.png" alt= "logo" />
      </div>
    </Link>
  </footer>
);

export default Footer;