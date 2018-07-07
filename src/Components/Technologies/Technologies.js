import React, { Component } from 'react'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styling
import './Technologies.css';

class Technologies extends Component {
  render() {
    return (
      <div className="tech-container">


        <div className="tech-row-one">
            <div className="row-one-card-one">
                <FontAwesomeIcon icon={["fab", "html5"]} id="html"/>
                <h1>Html 5</h1>
            </div>

            <div className="row-one-card-two">
                <FontAwesomeIcon icon={["fab", "css3-alt"]} id="css"/>
                <h1>Css 3</h1>
            </div>

            <div className="row-one-card-three">
                <FontAwesomeIcon icon={["fab", "js"]} id="js"/>
                <h1 style={{fontSize: '15px'}}>JavaScript</h1>
            </div>
        </div>

        <div className="tech-row-two">
            <div className="row-one-card-one">
                <FontAwesomeIcon icon={["fab", "react"]} id="react"/>
                <h1>React</h1>
            </div>

            <div className="row-one-card-two">
                <FontAwesomeIcon icon={["fab", "node-js"]} id="node"/>
                <h1>Node Js</h1>
            </div>

            <div className="row-one-card-three">
                <FontAwesomeIcon icon="database" id="postgres"/>
                <h1>SQL</h1>
            </div>
        </div>

        <div className="tech-row-three">
            <div className="row-one-card-one">
                <FontAwesomeIcon icon={["fab", "git-square"]} id="git"/>
                <h1>Git</h1>
            </div>

            <div className="row-one-card-two">
                <FontAwesomeIcon icon="cloud" id="API"/>
                <h1>API's</h1>
            </div>

            <div className="row-one-card-three">
                <FontAwesomeIcon icon="mobile-alt" id="mobile"/>
                <h1 style={{textAlign: 'center', fontSize: '13px'}}>Responsive Design</h1>
            </div>
        </div>


      </div>
    )
  }
}

export default Technologies;