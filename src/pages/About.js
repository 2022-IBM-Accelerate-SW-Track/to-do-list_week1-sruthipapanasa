import React, { Component } from 'react';
import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Sruthi Papanasa</div>
        <div className="brief_description">
          <ul>
            <li>Cats</li>
            <li>Swimming</li>
            <li>Painting</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}