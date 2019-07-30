const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 8080;

require('dotenv').config()

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Middleware
app.use((req, res, next) => {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "https://michael1009.github.io");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});
app.use(cors());

/**
 * 404 Error handling
 */
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
})


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.post("/email", (req, res) => {
    console.log(req.body);

    const mailOptions = {
        from: req.body.email, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: 'Portfolio email from: ' + req.body.name, // Subject line
        html: req.body.message// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.status(500).send('Error sending email');
        }
        else {
            console.log(info);
            res.status(200).send('Email send success');

        }
    });

});

app.listen(port, () => console.log(`Backend listening on port ${port}!`))