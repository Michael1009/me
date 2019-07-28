import React, { Component } from "react";
import "./css/introduction.css";
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../images/splash1.jpg";
import pic2 from "../images/splash2.jpg";
import pic3 from "../images/splash3.jpg";
import pic4 from "../images/splash4.jpg";
import pic5 from "../images/splash5.jpg";

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
        <Carousel className="splash_pic"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={6000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic5}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Introduction;
