import React, { Component } from "react";
import "./css/experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Pdf from "../resume/Resume_1Page_Michael_Chang.pdf";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Fade from "react-reveal/Fade";

import codeImg from "../images/code.jpg";
import webDev from "../images/webdev.jpg";
import pic3 from "../images/splash3.jpg";

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <svg preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="60"
          width="100vw"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
          style={{ background: "#eeeeee" }}>
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>
        {/* <svg preserveAspectRatio="none" 
          viewBox="0 0 100 100" 
          height="100" 
          width="100vw" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          className="svgcolor-light" 
          style={{ background: "white"}}>
          <path d="M50 0 L0 100 L100 100 Z" fill="#eeeeee" stroke="#eeeeee"></path>
        </svg> */}
        <div className="experience-container">
          <Fade duration={1200}>
            <div className="heading"> EXPERIENCE </div>
          </Fade>
          <Fade duration={1200} delay={100}>
            <div className="subheading"> WHAT AM I GOOD AT? </div>
          </Fade>

          <Fade duration={1000} delay={100}>
            <CardDeck className="card_deck">
              <Card className="text-center">
                <Card.Img variant="top" src={webDev} />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    I have experience developing web applications using <strong>React JS</strong>, <strong>Express</strong>, <strong>Angular</strong>, <strong>Spring</strong>,
                    and <strong>Django</strong> and am comfortable learning new frameworks.
                    In addition to these, I have also integrated web applications with <strong>Microsoft Azure</strong> and <strong>Travis CI</strong>.
                    </Card.Text>
                  <Card.Link
                    className="cardlink"
                    href="https://github.com/Michael1009/" target="_blank"
                  >
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip style={{ fontSize: "12px" }}>My projects!</Tooltip>}
                    >
                      <FontAwesomeIcon style={{ color: "#424242" }} icon={["fab", "github"]} />
                    </OverlayTrigger>
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card className="text-center">
                <Card.Img variant="top" src={codeImg} />
                <Card.Body>
                  <Card.Title>Software Development</Card.Title>
                  <Card.Text>
                    Over the years, I've come to learn that software development is so much more than coding.
                    My experience in the software development process comes from my personal experiences on software
                    development teams that used Agile methodologies.
                    </Card.Text>
                  <Card.Link
                    className="cardlink"
                    href="https://linkedin.com/in/mchang2017/" target="_blank"
                  >
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip style={{ fontSize: "12px" }}>My experiences!</Tooltip>}
                    >
                      <FontAwesomeIcon style={{ color: "#424242" }} icon={["fab", "linkedin"]} />
                    </OverlayTrigger>
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card className="text-center">
                <Card.Img variant="top" src={pic3} />

                <Card.Body>
                  <Card.Title>Hiking/Photography</Card.Title>
                  <Card.Text>
                    Outside of software development, one of my favorite things to do is go hiking
                    and take pictures along the way. I usually hike in Shenandoah National Park
                    with my favorite trail being Old Rag but my favorite place to hike has got to be
                    Banff National Park in Canada.
                    </Card.Text>
                  <Card.Link className="cardlink" href={Pdf} target="_blank">
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip style={{ fontSize: "12px" }}>My education!</Tooltip>}
                    >
                      <FontAwesomeIcon style={{ color: "#424242" }} icon="file-alt" />
                    </OverlayTrigger>
                  </Card.Link>
                </Card.Body>
              </Card>
            </CardDeck >

          </Fade>


        </div>

        {/* <svg preserveAspectRatio="none" 
          viewBox="0 0 100 102" 
          height="100" 
          width="100vw" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          className="svgcolor-light" 
          style={{ background: "white"}}>
          <path d="M0 0 L50 100 L100 0 Z" fill="#eeeeee" stroke="#eeeeee"></path>
        </svg> */}
        <svg preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="60"
          width="100vw"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
          style={{ background: "white" }}>
          <path d="M0 0 L50 100 L100 0 Z" fill="#eeeeee" stroke="#eeeeee"></path>
        </svg>
      </div >
    );
  }
}

export default Experience;
