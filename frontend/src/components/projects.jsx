import React, { Component } from "react";
import "./css/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import tearline_logo from '../images/tearline.png';
import skibuilder_logo from '../images/ski.png';
import wired_logo from '../images/wired_logo.png';


class Projects extends Component {


  render() {

    return (
      <div className="projects">
        <div className="heading">PROJECTS</div>
        <div className="subheading">MY WORK</div>

        <CardDeck>

          <Card className="project_card">
            <a href="https://skillbuilder.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={skibuilder_logo} className="card-img skibuilder" />
            </a>
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
              <Card.Link
                className="cardlink"
                href="https://github.com/Michael1009/project-101-byteme" target="_blank"
              >
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip style={{ fontSize: "12px" }}>SkillMatch</Tooltip>}
                >
                  <FontAwesomeIcon className="footer_icon" icon={["fab", "github"]} />
                </OverlayTrigger>
              </Card.Link>
              <Card.Link
                className="cardlink"
                href="https://skillbuilder.herokuapp.com/" target="_blank"
              >
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip style={{ fontSize: "12px" }}>Website</Tooltip>}
                >
                  <FontAwesomeIcon className="footer_icon" icon="laptop-code" />
                </OverlayTrigger>
              </Card.Link>
            </Card.Footer>
          </Card>

          <Card className="project_card">
            <a href="https://play.google.com/store/apps/details?id=mil.nga.tearline&hl=en" target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={tearline_logo} className="card-img tearline" />
            </a>
            <Card.Body>
              <Card.Title>Tearline</Card.Title>
              <Card.Text>
                Created the Android Tearline Application for the National Geospatial-Intelligence Agency to promote the distribution of
                unclassified intelligence. The team that I was assigned to, Pathfinder, had the goal of disseminating analysis on open source intelligence
                and this application was one of the ways in how they did so.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link
                className="cardlink"
                href="https://play.google.com/store/apps/details?id=mil.nga.tearline&hl=en" target="_blank"
              >
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip style={{ fontSize: "12px" }}>Google Play</Tooltip>}
                >
                  <FontAwesomeIcon className="footer_icon" icon={["fab", "google-play"]} />
                </OverlayTrigger>
              </Card.Link>
              <Card.Link
                className="cardlink"
                href="https://apps.apple.com/us/app/tearline/id1201916437" target="_blank"
              >
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip style={{ fontSize: "12px" }}>App Store</Tooltip>}
                >
                  <FontAwesomeIcon className="footer_icon" icon={["fab", "app-store-ios"]} />
                </OverlayTrigger>
              </Card.Link>
              <Card.Link
                className="cardlink"
                href="https://www.wired.com/2017/04/american-spies-now-smartphone-app/#slide-3" target="_blank"
              >
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip style={{ fontSize: "12px" }}>WIRED Publication</Tooltip>}
                >
                  <img className="wired_logo" src={wired_logo} alt="Wired" />
                </OverlayTrigger>
              </Card.Link>
            </Card.Footer>
          </Card>

        </CardDeck>
      </div>
    );
  }
}

export default Projects;
