import React, {Component} from 'react';

//Styling
import './Projects.css';

class Projects extends Component {
    constructor(){
        super()

        this.state = {
            currentlySelected: 'utahcarmeet'
        }

        //Bindings
        this.showUtahCarMeet = this.showUtahCarMeet.bind(this);
        this.showSpootify = this.showSpootify.bind(this);
    }

    //Methods
    showUtahCarMeet(){
        this.setState({
            currentlySelected: 'utahcarmeet'
        })
    }

    showSpootify(){
        this.setState({
            currentlySelected: 'spootify'
        })
    }

    render(){
        return (
            <div className="projects-container">
                <div className="project-tab">
                    <button 
                    style={this.state.currentlySelected === 'utahcarmeet' ? {border: '2px solid #1a1a1a'} : {}}
                    onClick={this.showUtahCarMeet}
                    >Utah Car Meet</button>
                    <button 
                    style={this.state.currentlySelected === 'spootify' ? {border: '2px solid #1a1a1a'} : {}}
                    onClick={this.showSpootify}
                    >Spotify Clone</button>
                </div>
                {
                    this.state.currentlySelected === 'utahcarmeet' ?
                    <div className="current-project-container" >
                        <div className="current-project-info" id="utcm">
                            <h1>Utah Car Meet</h1>
                            <h2>React | Redux | NodeJs | ExpressJs | PostgreSQL</h2>
                            <p>Utah Car Meet is my first Full-Stack web application I created to make an easier way for car enthusiasts in Utah to host and attend car meets. This award winning application uses React for the front-end supplemented with Redux to handle the data flow and sorting. The server consists of a NodeJs enviorment using an ExpressJs framework connecting to the database deployed on Heroku.</p>
                            <div className="current-project-links">
                                <a href="http://utahcarmeet.com/"><h1>Live Site</h1></a>
                                <a href="https://github.com/Tstokes9328/dev-mtn-personal/tree/master/utah-car-meet"><h2>Github</h2></a>
                            </div>
                        </div>
                        <div className="current-project-pictures">
                            <img src={require('../../assets/utc-landing.jpeg')} alt="utah car meets landing page"/>
                        </div>
                    </div>
                    :
                    <div className="current-project-container">
                        <div className="current-project-info">
                            <h1>Spotify Clone</h1>
                            <h2>React | Redux | NodeJs | PassportJs | Spotify API</h2>
                            <p>Spootify is a group developed app that I worked on with <a href="http://mkorotkov.com">Mikhail Korotkov</a> and <a href="http://jordanbuonforte.com">Jordan Buonforte</a>. The goal of the project was to clone the spotify desktop application, but within a web browser. Using Spotify's web API and playback SDK, we we're able to recreate a sleek looking Spotify clone as well as producing music playback. My main responsibilty was to achieve authentication using a users Spotify information through PassportJs, setting up the NodeJs server to connect to th Spotify API, and initializing and connecting the Spotify SDK music player.</p>
                            <div className="current-project-links">
                                <a href="https://spootify.org"><h1>Live Site</h1></a>
                                <a href="https://github.com/spootify/spootify"><h2>Github</h2></a>
                            </div>
                        </div>
                        <div className="current-project-pictures">
                        <img src={require('../../assets/spootify-overview.jpeg')} alt="spootify landing page"/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Projects;