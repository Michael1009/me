import React, { Component } from "react";
import "./css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Fade from "react-reveal/Fade";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="text">
          <Fade duration={1500}>
            <div className="heading"> ABOUT ME </div>
            <div className="subheading"> WHO AM I? </div>
          </Fade>

          <Fade duration={1500}>
            <div>
              <div className="description">
                I am currently a Junior at the University of Virginia pursuing a
                Bachelors of Science in Computer Science. I have a passion for
                technology and am looking for challenging experiences to push
                the boundaries of what I know, as I am always eager to learn! My
                main interest is in software development and I am currently
                looking for an internship for Summer 2020 where I can work on a
                software development team.
              </div>
              <div className="description">
                Over the years I have worked on a variety of software
                development positions, from my role as a Mobile Application
                Developer for the National Geospatial-Intelligence Agency to
                just last winter where I developed a full-stack web application
                that was integrated with Microsoft Azure at Plus3 IT. In
                addition to my work experience, my course work at the University
                of Virginia has given me a solid foundation in Data Structures,
                Algorithms, and Software Development as a whole.
              </div>
              <div className="description">
                But outside of school and coding, I also enjoy traveling,
                hiking, and landscape photography. Scroll to the end of this
                page to see a small gallery of the pictures that I have taken!
                If you want to see more, there will be a link to my Flickr.
              </div>
            </div>
          </Fade>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default About;
