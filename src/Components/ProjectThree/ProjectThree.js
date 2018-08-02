import React, { Component } from 'react'

//React Reveal
import Slide from 'react-reveal/Slide';

//Styling
import './ProjectThree.css';

class ProjectThree extends Component {
  render() {
    return (
      <div className="project-one-container">
      <Slide delay={500} left>
        <div className="project-one-info">
            <h1>Flickr Clone</h1>
            <h2>React | Redux | NodeJs | ExpressJs</h2>
            <p>This is a clone of the flickr website. It's still currently a work in progress, but I decided to clone this site to use their API.</p>
            <div className="project-one-links">
                <a href="#"><h1>Live Site</h1></a>
                <a href="#"><h2>Github</h2></a>
            </div>
        </div>
        </Slide>

        <Slide delay={500} right>
        <div className="project-one-preview">
            <div className="project-one-phone">
                <div className="project-one-phone-top">
                    <div className="phone-camera"></div>
                    <div className="phone-speaker"></div>
                </div>
                {/* <img src={require('#')} alt="Flickr Clone"/> */}
            </div>
        </div>
        </Slide>
      </div>
    )
  }
}

export default ProjectThree;