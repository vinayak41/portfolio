import React from "react";

export default function Project(props) {
  let { name, description, image, liveDemoLink, codeLink, teckStack } = props.projectData;
  image = './../.' + image;
  return (
    <div class="project-container">
      <div className="img-wrapper">
        <img src={image} alt={name} />
        <div className="buttons-wrapper">
          <button href><a href={codeLink} target="_blank">View Code</a></button>
          <button><a href={liveDemoLink} target="_blank">Live Poject</a></button>
        </div>
      </div> 
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <span>{teckStack.map( item => item)}</span>
      </div>
    </div>
  );
}
