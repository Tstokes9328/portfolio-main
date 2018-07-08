import React from 'react'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Styling
import './Footer.css';

export default () => {
  return (
    <div className="footer-container">
        <div className="footer-info-cont">
        <div className="footer-name">
            <h1>Name</h1>
            <h2>Tayte Stokes</h2>
        </div>

        <div className="footer-phone">
            <h1>Phone No.</h1>
            <h2>(801) 664 9328</h2>
        </div>

        <div className="footer-email">
            <h1>Email</h1>
            <h2>taytestokes9328@gmail.com</h2>
        </div>

        <div className="footer-address">
            <h1>Address</h1>
            <h2>1692 W 1000 S Lehi, UT</h2>
        </div>
        </div>

        <div className="footer-links">
            <a href="https://github.com/Tstokes9328"><FontAwesomeIcon icon={['fab', 'github']}/></a>
            <a href="https://www.linkedin.com/in/tayte-stokes-1a545b165/"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
        </div>
    </div>
  )
}
