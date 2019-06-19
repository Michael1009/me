import React, { Component } from "react";
import "./css/projects.css";

import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import tearline_logo from './images/tearline.webp';
import skibuilder_logo from './images/ski.png';

class Projects extends Component {


  render() {

    return (
      <div className="projects">
        <div className="subheading">PROJECTS</div>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={skibuilder_logo} className="card-img skibuilder" />
            <Card.Body>
              <Card.Title>SkillMatch</Card.Title>
              <Card.Text>
              SkiMatch is a web application that allows UVA students and faculty to connect over shared skills, 
              interests, experiences and expertise. Users can create profiles that list their relevant academic information 
              (i.e. major, past courses, UVA email, etc.) and skills, along with an explanation of why they are using the app 
              (i.e. to find/provide tutoring, form study groups, or find community members with similar hobbies and interests).
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={tearline_logo} className="card-img tearline" />
            <Card.Body>
              <Card.Title>Tearline</Card.Title>
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
