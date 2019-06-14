import React, { Component } from "react";
import "./App.css";
import About from "./components/about";
import Experience from "./components/experience";
import Timeline from "./components/timeline";
import Introduction from "./components/introduction";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faHeart,
  faFileAlt,
  faLaptopCode,
  faMountain,
  faPlane,
  faDumbbell,
  faCameraRetro,
  faImages,
  faCode,
  faLightbulb,
  faUsers,
  faSatellite,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pdf from "./components/resume/Resume_1Page_Michael_Chang.pdf";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


library.add(fab, faCheckSquare, faCoffee, faEnvelope,
  faHeart, faFileAlt, faLaptopCode, faMountain, faPlane,
  faDumbbell, faCameraRetro, faImages, faCode, faLightbulb,
  faUsers, faSatellite, faCloud)

class App extends Component {

  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.experienceRef = React.createRef();
    this.timelineRef = React.createRef();
    this.projectsRef = React.createRef();
  }

  scrollToAboutRef = () => window.scrollTo(0, this.aboutRef.current.offsetTop);
  scrollToExperienceRef = () => window.scrollTo(0, this.experienceRef.current.offsetTop);
  scrollToTimelineRef = () => window.scrollTo(0, this.timelineRef.current.offsetTop);
  scrollToProjectsRef = () => window.scrollTo(0, this.projectsRef.current.offsetTop);


  render() {
    return (

      <div id="container-wrap">
        <Introduction></Introduction>

        {/* Start SideBar code */}
        <div className="sidebar">
          <div className="profilepic" />
          <div className="heading">Michael Chang</div>

          <div className="links">
            <div className="link">
              <button onClick={() => this.scrollToAboutRef()}>About</button>
            </div>
            <div className="link">
              <button onClick={() => this.scrollToExperienceRef()}>Experience</button>
            </div>
            <div className="link">
              <button onClick={() => this.scrollToTimelineRef()}>Timeline</button>
            </div>
            <div className="link">
              <button onClick={() => this.scrollToProjectsRef()}>Projects</button>
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
            <div className="icon">
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Flickr</Tooltip>}
              >
                <a href="https://www.flickr.com/photos/michael9154/" target="_blank">
                  <FontAwesomeIcon icon={["fab", "flickr"]} />
                </a>
              </OverlayTrigger>
            </div>
          </div>
          <div className="footer">
            Made with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="coffee" />
          </div>
        </div>
        {/* End SideBar Code */}

        <div ref={this.aboutRef}>
          <About></About>
        </div>
        <div ref={this.experienceRef}>
          <Experience></Experience>
        </div>
        <div ref={this.timelineRef}>
          <Timeline></Timeline>
        </div>
        <div ref={this.projectsRef}>
          {/* <Gallery></Gallery> */}
        </div>

      </div>
    );
  }
}

export default App;
