import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import "./css/contact.css";


export default class Contact extends Component {
    render() {
        return (
            <div className="contact_container">
                <div className="contact_title">CONTACT</div>
                <div className="contact_header_bar"></div>
                <div className="contact_header_text">Always open to questions and new opportunities :)</div>
                <Form className="contact_form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="form_input" required type="email" placeholder="Enter email" />
                        <Form.Control className="form_input" required type="text" placeholder="Name" />
                        <Form.Control className="form_input" required as="textarea" rows="4" placeholder="Your message" />
                    </Form.Group>

                    <button className="contact_button" type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        )
    }
}
