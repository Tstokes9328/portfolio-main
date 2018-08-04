import React, { Component } from 'react'


//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styling
import './Skills.css';

class Skills extends Component {
  render() {
    return (
    <div className="skills-container" id="skills">
        <div className="services-container">
            <h1>| SKILLS</h1>
            <div className="services-card-container">
                <div className="front-end-container">
                    <div className="front-end-header">
                        <span id="front-header-one"></span>
                        <span id="front-header-two"><FontAwesomeIcon icon="code"/></span>
                        <span id="front-header-three"></span>
                    </div>
                    <h1>Front End Development</h1>
                    <p>Front end development is primarily what I focus in. React is my framework of choice when working in the front end.</p>
                </div>

                <div className="back-end-container">
                <div className="back-end-header">
                        <span id="back-header-one"></span>
                        <span id="back-header-two"><FontAwesomeIcon icon="database"/></span>
                        <span id="back-header-three"></span>
                    </div>
                    <h1>Back End Development</h1>
                    <p>Creating a clean and reliable server is my primary focus when developing in the back end. Right now, NodeJs with an ExpressJs framework is my go to.</p>
                </div>

                <div className="design-container">
                    <div className="design-header">
                            <span id="design-header-one"></span>
                            <span id="design-header-two"><FontAwesomeIcon icon="pencil-alt"/></span>
                            <span id="design-header-three"></span>
                    </div>
                        <h1>Responsive Design</h1>
                        <p>Responsive design is a priority when developing. I plan to build webpage layouts that are structered for flexible use amoung different view port sizes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Skills;