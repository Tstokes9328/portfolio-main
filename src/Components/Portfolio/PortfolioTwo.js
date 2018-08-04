import React from 'react'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styling
import './PortfolioTwo.css';

export default () => {
  return (
    <div className="portfolio-two-container">
        <div className="icon-container">
            <span id="desktop"><FontAwesomeIcon icon="desktop"/></span>
            <span id="tablet"><FontAwesomeIcon icon="tablet"/></span>
            <span id="portfolio-mobile"><FontAwesomeIcon icon="mobile"/></span>
        </div>

        <div className="project-link-container">
            <p>Check out some of my previous works and projects by clicking the button below</p>
            <button>View</button>
        </div>
    </div>
  )
}