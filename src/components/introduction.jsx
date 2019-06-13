import React, { Component } from "react";
import "./css/introduction.css";
import Typist from "react-typist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "./images/splash2.jpeg";
import pic2 from "./images/splash.jpg";
// import Parallax from "parallax-js";

class Introduction extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }


  render() {
    const { index, direction } = this.state;


    return (
      <div className="introduction">
        {/* <div className="splash_pic" /> */}
        <Carousel className="splash_pic"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {pic1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {pic2}
              alt="Third slide"
            />
          </Carousel.Item>
          
        </Carousel>
        {/* <Typist
          avgTypingDelay={70}
          cursor={{ show: false, hideWhenDone: true }}
          startDelay={1000}
        >
          <div className="typing_header">
            <div>
              <span>Hi, I'm Michael!</span>
            </div>
          </div>

          <Typist.Delay ms={500} />

          <div className="activities">
            <div className="activities_header">Things I enjoy in life...</div>
            <Typist.Delay ms={200} />
            <div>
              <FontAwesomeIcon icon="laptop-code" /> Coding
            </div>
            <Typist.Delay ms={200} />
            <div>
              <FontAwesomeIcon icon="mountain" /> Hiking
            </div>
            <Typist.Delay ms={200} />
            <div>
              <FontAwesomeIcon icon="dumbbell" /> Weight Lifting
            </div>
            <Typist.Delay ms={200} />
            <div>
              <FontAwesomeIcon icon="plane" /> Traveling
            </div>
            <Typist.Delay ms={200} />
            <div>......</div>
            <Typist.Backspace count={6} delay={750} />
            <div>
              and <FontAwesomeIcon icon="camera-retro" />{" "}
              <FontAwesomeIcon icon="images" />
              's along the way :)
            </div>
          </div>
        </Typist> */}
      </div>
    );
  }
}

export default Introduction;
