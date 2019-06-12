import React, { Component } from "react";
import "./css/experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Fade from "react-reveal/Fade";

class Experience extends Component {
  render() {
    return (
      <div className="experience">

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

          <Fade up delay={400}>
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
                <Card.Link className="cardlink" href="">
                  <FontAwesomeIcon icon="file-alt" />
                </Card.Link>
              </Card.Body>
            </Card>
          </Fade>

          <Fade up delay={800}>
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
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </CardDeck>
      </div>
    );
  }
}

export default Experience;
