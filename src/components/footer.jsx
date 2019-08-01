import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_container">
                <svg preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    height="40"
                    width="100vw"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgcolor-light"
                    style={{ background: "white" }}>
                    <path d="M50 0 L0 100 L100 100 Z" fill="#eeeeee" stroke="#eeeeee"></path>
                </svg>
                <div>Michael Chang</div>
                <div><FontAwesomeIcon icon="phone-alt" />  (703) 629-9178</div>
                <div><FontAwesomeIcon icon="envelope" />  <a href="mailto:myc6cp@virginia.edu">myc6cp@virginia.edu</a></div>
                <div>© Copyright 2019 Michael Chang</div>
            </div>
        )
    }
}
