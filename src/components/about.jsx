import React, { Component } from "react";
import "./css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Fade>
          <div className="heading"> ABOUT ME </div>
          <div className="subheading"> WHO AM I? </div>
        </Fade>

        <Fade>
          <div>
            <div className="description">
              I am currently a Junior at the University of Virginia pursuing a
              Bachelors of Science in Computer Science. I have a passion for
              technology and am looking for challenging experiences to push the
              boundaries of what I know, as I am always eager to learn! My main
              interest is in software development and I am currently looking for
              an internship for Summer 2020 where I can work on a software
              development team.
            </div>
            <div className="description">
              Over the years I have worked on a variety of software development
              positions, from my role as a Mobile Application Developer for the
              National Geospatial-Intelligence Agency to just last winter where
              I developed a full-stack web application that was integrated with
              Microsoft Azure at Plus3 IT. In addition to my work experience, my
              course work at the University of Virginia has given me a solid
              foundation in Data Structures, Algorithms, and Software
              Development as a whole.
            </div>
          </div>
        </Fade>

        <div className="heading"> EXPERIENCE </div>
        <div className="subheading"> WHAT AM I GOOD AT? </div>

        <CardDeck>
          <Fade up>
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Header className="card_1">
                <FontAwesomeIcon icon="code" />
              </Card.Header>
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link
                  className="cardlink"
                  href="https://github.com/Michael1009/"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Fade>

          <Fade up delay={500}>
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Header className="card_2">
                <FontAwesomeIcon icon="lightbulb" />
              </Card.Header>
              <Card.Body>
                <Card.Title>Data Structures and Algorithms</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link
                  className="cardlink"
                  href=""
                >
                  <FontAwesomeIcon icon="file-alt" />
                </Card.Link>
              </Card.Body>
            </Card>
          </Fade>

          <Fade up delay={1000}>
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Header className="card_3">
                <FontAwesomeIcon icon="users" />
              </Card.Header>
              <Card.Body>
                <Card.Title>Software Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link
                  className="cardlink"
                  href="https://linkedin.com/in/mchang2017/"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </CardDeck>
      </div>
    );
  }
}

export default About;
