require('dotenv').config();
const express = require('express');
const bodyPaser = require('body-parser');
const nodemailer = require('nodemailer');


//Using Express
const app = express();
app.use(bodyPaser.json());

app.use( express.static( `${__dirname}/../build` ) );

//ENV FILE
let { EMAIL_PASSWORD } = process.env;

//Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'taytestokes9328@gmail.com',
        pass: EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});
//Nodemailer End Point
app.post('/send/email', (req, res) => {
    let {name, email, message} = req.body;
    let mail = {
        from: email,
        to: 'taytestokes9328@gmail.com',
        html: "Name: " + name + "<br/> Email: " + email + "<br/> Subject:" + subject + "<br/> Message: " + message + "<br/> "
    }
    transporter.sendMail(mail, (error, info) => {
        if(error){
            return console.log('error sending email')
        }
        console.log('The message has been sent!');
        console.log(info); 
        transporter.close();
    })
    res.sendStatus(201);
})





app.listen(3005, () => console.log('listening on port 3005'));