import React, {Component} from 'react';

//React Smooth Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

//Styling
import './Navbar.css';

class Navbar extends Component {
    constructor(){
        super()
    
        this.state = {
          dropDown: false,
        };
    
        //Binds
        this.dropDown = this.dropDown.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
      }
    
      //DropDown State Changer
      dropDown(){
        this.setState({dropDown: !this.state.dropDown})
      }

      //Closes drop down after you select a nav link on mobile
      handleLinkClick(event){
        this.setState({
            dropDown: !this.state.dropDown
        })
      }

    render(){
        return (
        <nav className="nav-bar">
        <AnchorLink href="#home"><h1>TFS</h1></AnchorLink>
            <div className="patty-container">
            <div className="drop-down-patty" onClick={() => this.dropDown()}>
                <div className="patty-bar"></div>
                <div className="patty-bar"></div>
                <div className="patty-bar"></div>
            </div>

            <div className={this.state.dropDown ? "dropDownTrue" : "dropDownFalse"}>
                <ul>
                <AnchorLink href="#about"><li onClick={this.handleLinkClick}>About</li></AnchorLink>
                <AnchorLink href="#skills"><li onClick={this.handleLinkClick}>Skills</li></AnchorLink>
                <AnchorLink href="#projects"><li onClick={this.handleLinkClick}>Projects</li></AnchorLink>
                <AnchorLink href="#contact"><li onClick={this.handleLinkClick}>Contact</li></AnchorLink>
                </ul>
            </div>
            </div>

            <div className="full-screen-nav-list">
                <ul>
                <AnchorLink href="#about"><li>About</li></AnchorLink>
                <AnchorLink href="#skills"><li>Skills</li></AnchorLink>
                <AnchorLink href="#projects"><li>Projects</li></AnchorLink>
                <AnchorLink href="#contact"><li>Contact</li></AnchorLink>
                </ul>
            </div>
            </nav>
        )
    }
}

export default Navbar;