import React, { Component } from 'react';

//React PaticleJs
import Particles from 'react-particles-js';

//React Smooth Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


//Components
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Tech from './Components/Technologies/Technologies';
import Contact from './Components/Contact/Contact';

//Styling
import 'reset-css';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      dropDown: false
    };

    //Binds
    this.dropDown = this.dropDown.bind(this);
  }

  //DropDown State Changer
  dropDown(){
    this.setState({dropDown: !this.state.dropDown})
  }


  render() {
  
    //FontAwesome Library
    library.add(fab, faChevronDown, faCode, faServer, faSlidersH, faDatabase, faCloud, faMobileAlt, faEnvelope)

    return (
      <div className="App">

      <div className="header-container">
      <Particles params={{
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 1.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": .5
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 150,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}/>

        {/* Navbar */}
          <nav className="nav-bar">
            <h1>TFS</h1>

          <div className="patty-container">
            <div className="drop-down-patty" onClick={() => this.dropDown()}>
              <div className="patty-bar"></div>
              <div className="patty-bar"></div>
              <div className="patty-bar"></div>
            </div>

            <div className={this.state.dropDown ? "dropDownTrue" : "dropDownFalse"}>
              <ul>
                <AnchorLink href="#about"><li>About</li></AnchorLink>
                <AnchorLink href="#skills"><li>Skills</li></AnchorLink>
                <AnchorLink href=""><li>Portfolio</li></AnchorLink>
                <AnchorLink href=""><li>Contact</li></AnchorLink>
              </ul>
            </div>
          </div>

            <div className="full-screen-nav-list">
              <ul>
                <AnchorLink href="#about"><li>About</li></AnchorLink>
                <AnchorLink href="#skills"><li>Skills</li></AnchorLink>
                <AnchorLink href=""><li>Portfolio</li></AnchorLink>
                <AnchorLink href=""><li>Contact</li></AnchorLink>
              </ul>
            </div>
          </nav>

        {/* Welcome message */}
        <div className="welcome-container">
          <h1>TAYTE STOKES</h1>
          <h2>Web Developer</h2>
        </div>

        <div className="arrow-down">
          <FontAwesomeIcon icon='chevron-down' />
        </div>
        </div>

        <About/>
        <Skills/>
        <Tech />
        <Contact />

      </div>
    );
  }
}

export default App;
