import React from "react";

export default function Project(props) {
  let { name, description, image, LiveDemoLink, codeLink } = props.projectData;
  image = './../.' + image;
  return (
    <div class="project-container">
      <div class="project-img">
        <img src={image} alt="" />
      </div>
      <div class="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div class="buttons-wrapper">
        <button>
          <a href={LiveDemoLink} target="_blank">
            Live Demo
          </a>
        </button>
        <button>
          <a href={codeLink} target="_blank">
            View Code
          </a>
        </button>
      </div>
    </div>
  );
}
