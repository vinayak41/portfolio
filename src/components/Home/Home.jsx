import React from "react";
import "./Home.css";
import profileImg from '../../assets/vinayak-3.jpg'
import resume from '../../assets/vinayak-ramchandra-khandekar.pdf'

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="image-container">
          <div className="profile-picture">
            <img src={profileImg} alt="vinayak" />
          </div>
        </div>

        <div className="intro">
          <h1>Vinayak &nbsp;Khandekar</h1>
          <h6>Front-end Developer</h6>
          <div className="buttons-wrapper">
            <button><a href="#about">About me</a></button>
            <button className="resume"><a href={resume} target="_blank" rel="noopener noreferrer">Resume &nbsp;<span className="iconify" data-icon="fa-solid:file-download" data-inline="false"></span></a></button>
          </div>
        </div>
        <div className="social-media-icons">
          <div className="vertical-line"></div>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
          <div className="vertical-line"></div>
        </div>
      </div>
    </div>
  );
}
