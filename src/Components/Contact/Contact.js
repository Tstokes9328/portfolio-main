import React, { Component } from 'react'
import axios from 'axios';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styling
import './Contact.css';

class Contact extends Component {
    constructor(){
        super()

        this.state ={
            name: '',
            email: '',
            message: ''
        }

        //Binding Methods
        this.handleInputName = this.handleInputName.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }

    //Handle Input Change
    handleInputName(value){
        this.setState({name: value})
    }

    handleEmailChange(value){
        this.setState({email: value})
    }

    handleMessageChange(value){
        this.setState({message: value})
    }

    //Submit Email
    submitEmail(){
        let {name, email, message} = this.state;
        axios.post('/send/email', {name, email, message}).then(response => {
            console.log(response)
            this.setState({name: '', email: '', message:''})
        })
    }

  render() {
    return (
      <div className="contact-container" id="contact">
        <div className="contact-info">
            <h1>| CONTACT</h1>
            <h2>Phone</h2>
            <h3>+1 (801) 664-9328</h3>
            <h2>Email</h2>
            <h3>Taytestokes9328@gmail.com</h3>
            <h2>Location</h2>
            <h3>Lehi, UT</h3>
            <div className="contact-social">
            <a href="https://github.com/Tstokes9328"><FontAwesomeIcon icon={['fab', 'github']}/></a>
            <a href="https://www.linkedin.com/in/tayte-stokes-1a545b165/"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
            </div>
        </div>
        <div className="form-container">
            <div className="name-email-container">
                <input type="text" placeholder="Name" onChange={(e) => this.handleInputName(e.target.value)} value={this.state.name}/>
                <input type="text" placeholder="Email" onChange={(e) => this.handleEmailChange(e.target.value)} value={this.state.email}/>
            </div>
            <textarea id="" cols="30" rows="10" placeholder="Message" onChange={(e) => this.handleMessageChange(e.target.value)} value={this.state.message}></textarea>
            <button onClick={() => this.submitEmail()}><FontAwesomeIcon icon="envelope" id="message"/>Send Message</button>
        </div>
      </div>
    )
  }
}

export default Contact;