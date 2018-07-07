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
            subject: '',
            message: ''
        }

        //Binding Methods
        this.handleInputName = this.handleInputName.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
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

    handleSubjectChange(value){
        this.setState({subject: value})
    }

    handleMessageChange(value){
        this.setState({message: value})
    }

    //Submit Email
    submitEmail(){
        let {name, email, subject, message} = this.state;
        axios.post('/send/email', {name, email, subject, message}).then(response => {
            console.log(response)
            this.setState({name: '', email: '', subject: '', message:''})
        })
    }

  render() {
    return (
      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="form-container">
            <div className="name-email-container">
                <input type="text" placeholder="Name" onChange={(e) => this.handleInputName(e.target.value)} value={this.state.name}/>
                <input type="text" placeholder="Email" onChange={(e) => this.handleEmailChange(e.target.value)} value={this.state.email}/>
            </div>
            <input type="text" placeholder="Subject" onChange={(e) => this.handleSubjectChange(e.target.value)} value={this.state.subject}/>
            <textarea id="" cols="30" rows="10" placeholder="Message" onChange={(e) => this.handleMessageChange(e.target.value)} value={this.state.message}></textarea>
            <button onClick={() => this.submitEmail()}><FontAwesomeIcon icon="envelope" id="message"/>Send Message</button>
        </div>
      </div>
    )
  }
}

export default Contact;