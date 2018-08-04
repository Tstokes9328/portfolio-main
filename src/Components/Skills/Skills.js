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
            <h1>Skills</h1>

            <div className="services-card-container">
                <div className="front-end-container">
                    <div className="front-end-icon">
                        <FontAwesomeIcon icon="code"/>
                    </div>
                    <h1>Front-End Development</h1>
                    <p>Creating user friendly websites that look excellent is the ultimate goal I try to achieve when developing in the front-end</p>
                </div>

                <div className="back-end-container">
                    <div className="back-end-icon">
                        <FontAwesomeIcon icon="server"/>
                    </div>
                    <h1>Back-End Development</h1>
                    <p>Server side code is some of my favorite. Setting up and maintaing a server to successfully make RESTful requests is what I like to do</p>
                </div>

                <div className="endpoint-container">
                    <div className="endpoint-icon">
                        <FontAwesomeIcon icon="sliders-h"/>
                    </div>
                    <h1>Unit & End Point Testing</h1>
                    <p>Using Test Driven Development I can make sure code executes how it suppose to</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Skills;