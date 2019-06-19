import React, { Component } from "react";
import "./css/projects.css";

import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import tearline_logo from './images/tearline.webp';
import skibuilder_logo from './images/skibuilder.png';

class Projects extends Component {


  render() {

    return (
      <div className="projects">
        <div className="subheading">PROJECTS</div>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={skibuilder_logo} className="card-img skibuilder" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                School project blah blah blah
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={tearline_logo} className="card-img tearline" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={tearline_logo} className="card-img" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
