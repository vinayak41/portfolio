import React from "react";
import projectsList from "./../../projects";
import Project from "./../Project/Project";
import "./Projects.css";

export default function Projects() {
  return (
    <div class="projects">
      <div class="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-wrapper">
        {projectsList.map((projectData) => (
          <Project projectData={projectData} />
        ))}
      </div>
    </div>
  );
}
