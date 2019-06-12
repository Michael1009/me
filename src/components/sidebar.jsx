import React, { Component } from "react";
import "./css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pdf from "./resume/Resume_1Page_Michael_Chang.pdf";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const resumeTooltip = props => (
  <Tooltip>
    Tooltip on <strong />.
  </Tooltip>
);

class SideNav extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="mainContent">
          <div className="profilepic" />
          <div className="heading">Michael Chang</div>

          <div className="links">
            <div className="link">
              <a href="">Introduction</a>
            </div>
            <div className="link">
              <a href="">About</a>
            </div>
            <div className="link">
              <a href="">Experience</a>
            </div>
            <div className="link">
              <a href="">Timeline</a>
            </div>
            <div className="link">
              <a href="">Gallery</a>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Resume</Tooltip>}
              >
                <a href={Pdf} target="_blank">
                  <FontAwesomeIcon icon="file-alt" />
                </a>
              </OverlayTrigger>
            </div>
            <div className="icon">
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Email</Tooltip>}
              >
                <a href="mailto:myc6cp@virginia.edu" target="_blank">
                  <FontAwesomeIcon icon="envelope" />
                </a>
              </OverlayTrigger>
            </div>
            <div className="icon">
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>LinkedIn</Tooltip>}
              >
                <a href="https://linkedin.com/in/mchang2017/" target="_blank">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </OverlayTrigger>
            </div>
            <div className="icon">
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Github</Tooltip>}
              >
                <a href="https://github.com/Michael1009/" target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </OverlayTrigger>
            </div>
            <div className="icon">
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Facebook</Tooltip>}
              >
                <a href="https://www.facebook.com/Michael9154/" target="_blank">
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
              </OverlayTrigger>
            </div>
            <div className="icon">
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Instagram</Tooltip>}
              >
                <a href="https://www.instagram.com/michael9154" target="_blank">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </OverlayTrigger>
            </div>
          </div>

          <div className="footer">
            Made with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="coffee" />
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
