import React from "react";
import projectsList from "./../../projects";
import Project from "./../Project/Project";
import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
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
