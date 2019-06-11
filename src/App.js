import React, { Component } from "react";
import "./App.css";
import TopBar from "./components/topbar";
import SideNav from "./components/sidebar";
import Projects from "./components/projects";
import About from "./components/about";
import Blog from "./components/blog";
import Introduction from "./components/introduction";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faHeart,
  faFileAlt,
  faLaptopCode,
  faMountain,
  faPlane,
  faDumbbell,
  faCameraRetro,
  faImages,
  faCode,
  faLightbulb,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';


library.add(fab, faCheckSquare, faCoffee, faEnvelope,
  faHeart, faFileAlt, faLaptopCode, faMountain, faPlane,
  faDumbbell, faCameraRetro, faImages, faCode, faLightbulb,
  faUsers)

class App extends Component {
  render() {
    return (

      <div id="container-wrap">
        {/* <TopBar id="topbar"></TopBar> */}
        <Introduction></Introduction>
        <SideNav></SideNav>
        <Zoom>
          <About></About>
        </Zoom>
        
        {/*  */}

        {/* 
          
          <Projects></Projects>
          <Blog></Blog> */}
      </div>
    );
  }
}

export default App;
