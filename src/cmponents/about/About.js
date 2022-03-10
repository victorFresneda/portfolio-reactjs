import React from "react";
import "./About.css";
import imgDev from '../../media/developer.webp'

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>let me tell you something about me</h3>
        <p>
          In my experience as a front-end developer I have acquired capabilities
          to translate designs into programming language, develop the visual
          part of the web as well as its structure, facilitating navigation
          using interactive components and reusable for the user interface.
          keeping the good ones practices
        </p>
      </div>
      <div className="about-img">
          <img src={imgDev} alt="about"/>
      </div>
    </div>
  );
};
