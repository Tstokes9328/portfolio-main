import React, { Component } from 'react'

//React Bootstrap
import {Carousel} from 'react-bootstrap';

//React Reveal
import Slide from 'react-reveal/Slide';

//Styling
import './ProjectOne.css';

class ProjectOne extends Component {
  render() {
    return (
      <div className="project-one-container">
      <Slide delay={500} left>
        <div className="project-one-info">
            <h1>Utah Car Meet</h1>
            <h2>React | Redux | NodeJs | ExpressJs | PostgreSQL</h2>
            <p>Utah Car Meet is my first Full-Stack web application I created to make an easier way for car enthusiasts in Utah to host and attend car meets. This award winning application uses React for the front-end supplemented with Redux to handle the data flow and sorting. The server consists of a NodeJs enviorment using an ExpressJs framework connecting to the database deployed on Heroku.</p>
            <div className="project-one-links">
                <a href="http://utahcarmeet.com/"><h1>Live Site</h1></a>
                <a href="https://github.com/Tstokes9328/dev-mtn-personal/tree/master/utah-car-meet"><h2>Github</h2></a>
            </div>
        </div>
        </Slide>

        <Slide delay={500} right>
        <div className="project-one-preview">
            <Carousel interval={7500}>
                <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/utc-landing.jpeg')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/utc-home.jpeg')} />
                </Carousel.Item>
            </Carousel>
        </div>
        </Slide>
      </div>
    )
  }
}

export default ProjectOne;