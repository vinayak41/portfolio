import React from 'react'
import "./Skill.css"

export default function Skill({name, length}) {
    return (
        <div class="skill">
              <div class="skill-name">
                <span>{name}</span>
              </div>
              <svg class="progress-circle">
                <circle
                  class="back-circle"
                  r="53"
                  cy="60"
                  cx="60"
                  stroke-width="14"
                  fill="transparent"
                  stroke="rgb(155, 155, 155)"
                ></circle>
                <circle
                  class="front-circle"
                  r="53"
                  cy="60"
                  cx="60"
                  fill="transparent"
                  stroke="rgb(50, 255, 149)"
                  stroke-width="14"
                  stroke-dasharray= {length + " 360"}
                  stroke-linecap="round"
                ></circle>
              </svg>
            </div>
    )
}
