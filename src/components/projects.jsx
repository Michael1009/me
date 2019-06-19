import React, { Component } from "react";
import "./css/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import tearline_logo from './images/tearline.webp';
import skibuilder_logo from './images/ski.png';
import wired_logo from './images/wired_logo.png';


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
              <Card.Link
                className="cardlink"
                href="https://github.com/Michael1009/project-101-byteme" target="_blank"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip style={{ fontSize: "12px" }}>SkillMatch</Tooltip>}
                >
                  <FontAwesomeIcon className="icon_blue" icon={["fab", "github"]} />
                </OverlayTrigger>
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={tearline_logo} className="card-img tearline" />
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
                  <FontAwesomeIcon className="icon_blue" icon={["fab", "google-play"]} />
                </OverlayTrigger>
              </Card.Link>
              <Card.Link
                className="cardlink"
                href="https://apps.apple.com/us/app/tearline/id1201916437" target="_blank"
              >
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip style={{ fontSize: "12px" }}>iOS App Store</Tooltip>}
                >
                  <FontAwesomeIcon className="icon_blue" icon={["fab", "app-store-ios"]} />
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
                  <img className="wired_logo" src={wired_logo} />
                </OverlayTrigger>
              </Card.Link>
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
