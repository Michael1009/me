import React, { Component } from 'react';
import "./css/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideNav extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="mainContent">
                    <div className="profilepic"></div>
                    <div className="heading">Michael Chang</div>
                    <div className="contact">
                        <div className="resume"> <a href=""><FontAwesomeIcon icon="file-alt" /> Resume</a></div>
                        <div className="email"> <FontAwesomeIcon icon="envelope" /> myc6cp@virginia.edu</div>
                    </div>

                    <div className="links">
                        <div><a href="" data-nav-section="">Introduction</a></div>
                        <div><a href="" data-nav-section="">About</a></div>
                        <div><a href="" data-nav-section="">Experience</a></div>
                        <div><a href="" data-nav-section="">Projects</a></div>
                    </div>

                    <div className="icons">
                        <div className="icon"><a href="https://linkedin.com/in/mchang2017/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></div>
                        <div className="icon"><a href="https://github.com/Michael1009/"><FontAwesomeIcon icon={['fab', 'github']} /></a></div>
                        <div className="icon"><a href="https://www.facebook.com/Michael9154/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
                        <div className="icon"><a href="https://www.instagram.com/michael9154"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>

                    </div>

                    <div className="footer">Made with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="coffee" /></div>
                </div>
            </div>
        );
    }
}

export default SideNav;
