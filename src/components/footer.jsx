import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_container">
                <div>Michael Chang</div>
                <div><FontAwesomeIcon icon="phone" />  (703) 629-9178</div>
                <div><FontAwesomeIcon icon="envelope" />  <a href="mailto:myc6cp@virginia.edu">myc6cp@virginia.edu</a></div>
                <div>© Copyright 2019 Michael Chang</div>
            </div>
        )
    }
}
