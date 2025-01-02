import React from "react";

const AboutMe = () => {
  return (
    <div className="hero">
      <img src={Lax} alt="" height="200" width="200" />
      <h1>
        <span>I'm Laksana Sivakumaran,</span> Software Engineer based in Sri
        Lanka
      </h1>
      <p>
        I am Laksana 4th-year undergraduate student at Uva Wellassa University
        of Sri Lanka, Pursuing a degree in BSc (Hons) Computer Science and
        Technology bring a strong academic foundation in Backend and front-end
        development complemented by hands-on projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default AboutMe;
