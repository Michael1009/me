import React, { Component } from "react";
import "./css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "react-reveal/Slide";

import ng_logo from '../images/ng_logo.jpg';
import nga_logo from '../images/nga_logo.png';
import p3it_logo from '../images/p3it_logo.png';

class Timeline extends Component {
  render() {
    return (
      <div className="container">
        <div className="heading"> WORK </div>
        <div className="subheading"> TIMELINE </div>
        <div className="desktop">
          <ul className="timeline">
            <Slide left>
              <li>
                <div className="timeline-badge blue">
                  <FontAwesomeIcon icon="code" />
                </div>
                <div className="timeline-panel">

                  <div className="heading-container">
                    <img className="timeline-logo" src={ng_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Northrop Grumman</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2019</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                      Developed a full stack web application using <b>React JS</b> and <b>Spring</b> to help a team automate a certain complex process.
                    Also worked as a mobile application developer to help develop an <b>Android application</b>.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right>
              <li className="timeline-inverted">
                <div className="timeline-badge green">
                  <FontAwesomeIcon icon="cloud" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={p3it_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Plus3 IT</h4>
                      <div className="timeline-subtitle">Cloud Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Winter 2018</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                      Developed a full stack cloud application using <b>Angular</b> for the frontend and <b>Spring</b> for the
                    backend to handle RESTful API calls. The web application was hosted through <b>Azure</b> using App
                                  Services and utilized both Azure Blob Storage and Azure SQL Servers.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide left>
              <li>
                <div className="timeline-badge yellow">
                  <FontAwesomeIcon icon="satellite" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={nga_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title-nga">National Geospatial-Intelligence Agency</h4>
                      <div className="timeline-subtitle">Data Science Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2018</small></div>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Implemented Python scripts for web scraping and data visualization for geospatial data. Worked
                      primarily with the Panda library for parsing through the data, BeautifulSoup for web scraping, and
                      Matplotlib and Seaborn for data visualization.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right>
              <li className="timeline-inverted">
                <div className="timeline-badge orange">
                  <FontAwesomeIcon icon="satellite" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={nga_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title-nga">National Geospatial-Intelligence Agency</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2017</small></div>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Worked on a webpage development team to create a web application that would aid in streamlining a certain process.
                    The web application was developed in <b>React JS</b> and used <b>Flask</b> as the backend.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>

            <Slide left>
              <li>
                <div className="timeline-badge red">
                  <FontAwesomeIcon icon="satellite" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={nga_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title-nga">National Geospatial-Intelligence Agency</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2016</small></div>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mobile Application Developer in the Pathfinder division, developed and deployed the <b>Tearline Application</b> to promote the distribution of mobile, unclassified intelligence.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
          </ul>
        </div>

        <div className="mobile">
          <ul className="timeline">
            <Slide right>
              <li className="timeline-inverted">
                <div className="timeline-badge blue">
                  <FontAwesomeIcon icon="code" />
                </div>
                <div className="timeline-panel">

                  <div className="heading-container">
                    <img className="timeline-logo" src={ng_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Northrop Grumman</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2019</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                      Developed a full stack web application using <b>React JS</b> and <b>Spring</b> to help a team automate a certain complex process.
                    Also worked as a mobile application developer to help develop an <b>Android application</b>.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right>
              <li className="timeline-inverted">
                <div className="timeline-badge green">
                  <FontAwesomeIcon icon="cloud" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={p3it_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Plus3 IT</h4>
                      <div className="timeline-subtitle">Cloud Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Winter 2018</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                      Developed a full stack cloud application using <b>Angular</b> for the frontend and <b>Spring</b> for the
                    backend to handle RESTful API calls. The web application was hosted through <b>Azure</b> using App
                                  Services and utilized both Azure Blob Storage and Azure SQL Servers.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right>
              <li className="timeline-inverted">
                <div className="timeline-badge yellow">
                  <FontAwesomeIcon icon="satellite" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={nga_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title-nga">National Geospatial-Intelligence Agency</h4>
                      <div className="timeline-subtitle">Data Science Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2018</small></div>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Implemented Python scripts for web scraping and data visualization for geospatial data. Worked
                      primarily with the Panda library for parsing through the data, BeautifulSoup for web scraping, and
                      Matplotlib and Seaborn for data visualization.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right>
              <li className="timeline-inverted">
                <div className="timeline-badge orange">
                  <FontAwesomeIcon icon="satellite" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={nga_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title-nga">National Geospatial-Intelligence Agency</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2017</small></div>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Worked on a webpage development team to create a web application that would aid in streamlining a certain process.
                    The web application was developed in <b>React JS</b> and used <b>Flask</b> as the backend.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>

            <Slide right>
              <li className="timeline-inverted">
                <div className="timeline-badge red">
                  <FontAwesomeIcon icon="satellite" />
                </div>
                <div className="timeline-panel">
                  <div className="heading-container">
                    <img className="timeline-logo" src={nga_logo} alt="logo" />
                    <div className="timeline-heading">
                      <h4 className="timeline-title-nga">National Geospatial-Intelligence Agency</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2016</small></div>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mobile Application Developer in the Pathfinder division, developed and deployed the <b>Tearline Application</b> to promote the distribution of mobile, unclassified intelligence.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
          </ul>
        </div>
      </div>
    );
  }
}

export default Timeline;
