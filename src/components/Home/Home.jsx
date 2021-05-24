import React from "react";
import "./Home.css"
import vinayak_img from './../../assets/vinayak.jpg'

export default function Home() {
  return (
    <div class="home">
      <div class="content">
        <div class="image-container">
          <div class="profile-picture">
            <img src={vinayak_img} alt="vinayak" />
          </div>
        </div>

        <div class="intro">
          <h1>Vinayak &nbsp;Khandekar</h1>
          <h6>Front-end Developer</h6>
          <button>About me</button>
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
