import React, { Component } from 'react'

//React Bootstrap
import {Carousel} from 'react-bootstrap';

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
            <h2>React | Redux | NodeJs | ExpressJs | Flickr API</h2>
            <p>This is a clone of the flickr website. I decided to clone this site to play with their public API. For the front-end, I am using React with Redux for state management. The back-end consists of a NodeJs environment using an ExpressJs framework.</p>
            <div className="project-one-links">
                <a href="#"><h1>Live Site</h1></a>
                <a href="https://github.com/Tstokes9328/flickr-clone"><h2>Github</h2></a>
            </div>
        </div>
        </Slide>

        <Slide delay={500} right>
        <div className="project-one-preview">
            <Carousel interval={7500}>
                <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/flickr.png')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/flickr2.png')} />
                </Carousel.Item>
            </Carousel>
        </div>
        </Slide>
      </div>
    )
  }
}

export default ProjectThree;