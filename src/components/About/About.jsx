import React from "react";
import "./About.css";

export default function About() {
  return (
    <div class="about">
      <div class="title">
        <h1>About</h1>
      </div>
      <div class="content">
        <div className="about-me">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello👋🏼, I am Vinayak
          Khandekar, An enthusiastic forn-end developer having interest in Web
          development. Loves to learn new techs and always tries to keep myself
          updated to the tech world.
        </div>
        <div className="teckstacks">
          <h2>Teck Stack</h2>
          <div className="teckstacks-wrapper">
            <div className="teck-icon-wrapper">
              <i class="devicon-react-original colored"></i>
              <p>React</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-html5-plain colored"></i>
              <p>HTML</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-nodejs-plain colored"></i>
              <p>Node</p>
            </div>
            {/* <div className="teck-icon-wrapper"><i class="devicon-express-original"></i><p>Express</p></div> */}
            <div className="teck-icon-wrapper">
              <i class="devicon-express-original colored"></i>
              <p>Express</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-mongodb-plain colored"></i>
              <p>MongoDB</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-bootstrap-plain colored"></i>
              <p>BootStrap</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-redux-original colored"></i>
              <p>Redux</p>
            </div>
            <div className="teck-icon-wrapper">
              <i class="devicon-cplusplus-plain colored"></i>
              <p>C++</p>
            </div>
          </div>
        </div>
        <div className="tools">
          <h2>Tools</h2>
          <div className="tools-wrapper">
            <div className="tools-icon-wrapper">
            <span class="iconify" data-icon="logos:git-icon" data-inline="false"></span>
              <p>Git</p>
            </div>
            <div className="tools-icon-wrapper github">
            <span class="iconify" data-icon="akar-icons:github-fill" data-inline="false"></span>
              <p>GitHub</p>
            </div>
            <div className="tools-icon-wrapper">
            <span class="iconify" data-icon="logos:postman-icon" data-inline="false"></span>
              <p>Postman</p>
            </div>
            <div className="tools-icon-wrapper">
            <span class="iconify" data-icon="logos:figma" data-inline="false"></span>
              <p>Figma</p>
            </div>
            <div className="tools-icon-wrapper">
            <span class="iconify" data-icon="vscode-icons:file-type-vscode" data-inline="false"></span>
              <p>VS code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
