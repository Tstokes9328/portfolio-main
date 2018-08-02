import React, { Component } from 'react'

//React Bootstrap
import {Carousel} from 'react-bootstrap';

//React Reveal
import Slide from 'react-reveal/Slide';

//Styling
import './ProjectTwo.css';

class ProjectTwo extends Component {
  render() {
    return (
        <div className="project-two-container">
        <Slide delay={500} right>
        <div className="project-two-info">
            <h1>Spootify</h1>
            <h2>React | Redux | NodeJs | PassportJs | Spotify API</h2>
            <p>Spootify is a group developed app that I worked on with <a href="http://mkorotkov.com">Mikhail Korotkov</a> and <a href="http://jordanbuonforte.com">Jordan Buonforte</a>. The goal of the project was to clone the spotify desktop application, but within a web browser. Using Spotify's web API and playback SDK, we we're able to recreate a sleek looking Spotify clone as well as producing music playback. My main responsibilty was to achieve authentication using a users Spotify information through PassportJs, setting up the NodeJs server to connect to th Spotify API, and initializing and connecting the Spotify SDK music player.</p>
            <div className="project-two-links">
                <a href="https://spootify.org"><h1>Live Site</h1></a>
                <a href="https://github.com/spootify/spootify"><h2>Github</h2></a>
            </div>
        </div>
        </Slide>

        <Slide delay={500} left>
        <div className="project-two-preview">
            <Carousel interval={7500}>
            <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/spootify-login.jpeg')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/spootify-home.jpeg')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/spootify-overview.jpeg')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={350} alt="900x500" src={require('../../assets/spootify-songs.jpeg')} />
                </Carousel.Item>
            </Carousel>
        </div>
        </Slide>
      </div>
    )
  }
}

export default ProjectTwo;