import React from "react";
import "./Home.css";
import profileImg from '../../assets/vinayak-3.jpg'

export default function Home() {
  return (
    <div class="home">
      <div class="content">
        <div class="image-container">
          <div class="profile-picture">
            <img src={profileImg} alt="vinayak" />
          </div>
        </div>

        <div class="intro">
          <h1>Vinayak &nbsp;Khandekar</h1>
          <h6>Front-end Developer</h6>
          <div className="buttons-wrapper">
            <button>About me</button>
            <button className="resume">Resume &nbsp;<span class="iconify" data-icon="fa-solid:file-download" data-inline="false"></span></button>
          </div>
        </div>
        <div class="social-media-icons">
          <div class="vertical-line"></div>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-instagram"></i>
          <div class="vertical-line"></div>
        </div>
      </div>
    </div>
  );
}
