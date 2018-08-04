import React, { Component } from 'react'

//Styling
import 'reset-css';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-container" id="about">
        <div className="img-container">

        </div>

        <div className="about-split-container">
          <div className="personal-bio-container">
            <h1>ABOUT ME</h1>
            <p>Hi, I'm Tayte. I'm a simple guy who loves to do not so simple things. When I'm not hunched over my computer writing code you can usually catch me riding my skateboard or snowboard, creating a new Spotify playlist, laughing at my own joke, at the movies, or spending time with my friends and family.</p>

            <p>Innovation excites me and is what drove me to start typing random keys in hopes a website will be created. I'm always looking for opportunities to improve my skillset to later use to contribute to new innovations.</p>

            <p>I'm hoping to work alongside others with the same desire to move forward.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;