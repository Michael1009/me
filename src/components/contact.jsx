import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

import "./css/contact.css";


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            captcha: ''
        };

        this.onCaptchaChange = this.onCaptchaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();

        if (this.state.captcha !== '' && this.state.captcha !== null) {

            const formData = {
                email: event.target.email.value,
                name: event.target.name.value,
                message: event.target.message.value
            };

            event.target.reset();
            // Progress bar with axios
            axios.request({
                method: "post",
                url: "https://portfolio-email.herokuapp.com/email",
                data: formData,
            }).then(res => {
                if (res.status !== 200) {
                    throw new Error("Error Uploading");
                }
            }).catch(error => {
                console.log(error);
            });
        }
        else {
            console.log(this.state.captcha);
        }
    }

    onCaptchaChange(value) {
        this.setState({ captcha: value })
    }

    render() {
        return (
            <div className="contact_container">
                <div className="contact_title">CONTACT</div>
                <div className="contact_header_bar"></div>
                <div className="contact_header_text">Always open to questions and new opportunities :)</div>
                <Form className="contact_form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="form_input" required name="email" type="email" placeholder="Enter email" />
                        <Form.Control className="form_input" required name="name" type="text" placeholder="Name" />
                        <Form.Control className="form_input" required name="message" as="textarea" rows="4" placeholder="Your message" />
                    </Form.Group>

                    <ReCAPTCHA
                        className="recaptcha"
                        sitekey="6LdL968UAAAAAOewuSqme4aosvcbhgZbmH-nw5-X"
                        onChange={this.onCaptchaChange}
                    />

                    <button className="contact_button" type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        )
    }
}
