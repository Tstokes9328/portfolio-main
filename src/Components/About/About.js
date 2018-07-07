import React, { Component } from 'react'


//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <h1>About Me,</h1>
          <p>I'm a simple guy who loves to do not so simple things. When I'm not hunched over my computer writing code you can usually catch me riding my skateboard, burying my head into a book, kicking butt at smash bros, or spending time with my friends and family.</p>
        </div>

        <hr />

        <div className="personal-info-container">
          <div className="info-name">
            <h1>Name:</h1>
            <h2>Tayte Stokes</h2>
          </div>

          <div className="info-age">
            <h1>Age:</h1>
            <h2>21 yrs young</h2>
          </div>

          <div className="info-location">
            <h1>Location:</h1>
            <h2>Lehi, UT</h2>
          </div>

          <div className="info-email">
            <h1>Email:</h1>
            <h2>taytestokes9328@gmail.com</h2>
          </div>

          <div className="social-container">
            <a href="https://www.instagram.com/taytestokes/"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
            <a href="https://www.facebook.com/tayte.stokes.9?ref=bookmarks"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
            <a href="https://twitter.com/taytestokes"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
          </div>

        </div>
        </div>
      </div>
    )
  }
}

export default About;