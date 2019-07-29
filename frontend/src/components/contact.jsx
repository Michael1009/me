import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

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
            console.log(event.target.email.value);
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
