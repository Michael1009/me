import React, { Component } from "react";
import "./css/experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Pdf from "../resume/Resume_1Page_Michael_Chang.pdf";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import codeImg from "../images/code.jpg";
import webDev from "../images/webdev.jpg";
import blurCode from "../images/blurCode.jpg";

class Experience extends Component {
  render() {
    return (
      <div className="experience">

        <div className="heading"> EXPERIENCE </div>
        <div className="subheading"> WHAT AM I GOOD AT? </div>

        <CardDeck className="card_deck">
          <Card className="text-center">
            <Card.Img variant="top" src={webDev} />
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                My foundation in web development comes from working on various projects to develop web applications.
                I have developed web applications using React JS, Angular, Spring, and Django and am comfortable learning new frameworks.
                In addition to these, I have also integrated web applications with Microsoft Azure and Travis CI.
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
            <Card.Img variant="top" src={blurCode} />

            <Card.Body>
              <Card.Title>Data Structures and Algorithms</Card.Title>
              <Card.Text>
                My course work at UVA has solidified my understanding of data structures (CS2150) and algorithms (CS4102)
                by providing rigorous curriculums that pushed me to explore these topics thoroughly.
                I have to say that these courses were some of the most challenging, yet rewarding courses I've taken so far.
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

          <Card className="text-center">
            <Card.Img variant="top" src={codeImg} />
            <Card.Body>
              <Card.Title>Software Development</Card.Title>
              <Card.Text>
                Over the years, I've come to learn that software development is so much more than coding.
                My experience in the software development process comes from my personal experiences on software
                development teams (mostly using Agile) and an Advanced Software Development course at UVA.
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
        </CardDeck >
      </div >
    );
  }
}

export default Experience;
