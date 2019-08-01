import React, { Component } from "react";
import "./css/about.css";
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
                the boundaries of what I know. My
                main interest is in software development and I am currently
                looking for a challenging internship for Summer 2020 on a
                software development team.
              </div>
              <div className="description">
                Over the years I have worked on a variety of software
                development positions, from my role as a Mobile Application
                Developer for the National Geospatial-Intelligence Agency to
                just last winter where I developed a full-stack web application
                integrated with Microsoft Azure at Plus3 IT. In
                addition to my work experience, my course work at the University
                of Virginia has given me a solid foundation in Data Structures,
                Algorithms, and Software Development as a whole.
              </div>
              <div className="description">
                But outside of school and coding, I also enjoy traveling,
                hiking, and landscape photography.
                Check out my <a href="https://www.flickr.com/photos/michael9154/" target="_blank" rel="noopener noreferrer">
                  Flickr
                </a> if you want to see more! :)
              </div>
            </div>
          </Fade>
        </div>
        {/* <svg preserveAspectRatio="none" 
          viewBox="0 0 100 102" 
          height="100" 
          width="100vw" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          class="svgcolor-light" 
          style={{ background: "#eeeeee"}}>
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg> */}
      </div>
    );
  }
}

export default About;
