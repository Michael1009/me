import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast'

import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

import "./css/contact.css";


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            captcha: '',
            showToast: false
        };

        this.onCaptchaChange = this.onCaptchaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowToast = this.handleShowToast.bind(this);
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
            this.handleShowToast();

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

    handleShowToast() {
        this.setState({ showToast: true });
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
                    <Toast className="toast"
                        show={this.state.showToast}
                        onClose={() => this.setState({ showToast: false })}
                        delay={3000}
                        autohide>
                        <Toast.Body>Sent email! Looking forward to talking :)</Toast.Body>
                    </Toast>
                </Form>

            </div>
        )
    }
}
