import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Chicago Symposium on Transformative AI</h3>
          <p>November 9-10, 2024</p>
          <p>David Rubenstein Forum, University of Chicago</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>avikg@uchicago.edu</p>
          <p>jialingjiao@uchicago.edu</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Chicago Symposium on Transformative AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
