import React from "react";
import skills from "./../../skills";
import Skill from "./../Skill/Skill";
import "./About.css";

export default function About() {
  return (
    <div class="about">
      <div class="title">
        <h1>About</h1>
      </div>
      <div class="content">
        <div class="left-section">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello👋🏼, I am Vinayak Khandekar, An enthusiastic
            forn-end developer having interest in Web development. Loves to
            learn new techs and always tries to keep myself updated to the tech
            world.
          </p>
        </div>
        <div class="right-section">
          <div class="skills-title">
            <h1>Technology Stack</h1>
          </div>
          <div class="skills-wrapper">
            {skills.map((skill) => (
              <Skill name={skill.name} length={skill.length} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
