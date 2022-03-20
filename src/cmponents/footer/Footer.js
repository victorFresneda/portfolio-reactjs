import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Victor Alfonso Fresneda Higuera </h1>
        <p>Bogotá city</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>and let is get down to work </p>
      </div>
      <div className="footer-sns">
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/victor-fresneda-44b88420a"
            target="_blank" rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"> </i>
          </a>
          <a href="https://twitter.com/FresnedaVictor?t=K7XV_ta6Oaqs8lYpSnk98w&s=09" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"> </i>
          </a>
          <a href="https://github.com/victorFresneda" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"> </i>
          </a>
        </div>
        <div className="design-by">Design By Victor Fresneda</div>

      </div>
    </footer>
  );
};
