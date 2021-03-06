import React, { Component } from "react";
import "./css/timeline.css";
import Slide from "react-reveal/Slide";

import ng_logo from '../images/ng_logo.jpg';
import nga_logo from '../images/nga_logo.png';
import p3it_logo from '../images/p3it_logo.png';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        <div className="heading"> WORK </div>
        <div className="subheading"> TIMELINE </div>
        <div className="desktop">
          <ul className="timeline">
            <Slide left duration={500}>
              <li>
                <img className="timeline-badge logo" src={ng_logo} alt="logo" />
                <div className="timeline-panel">

                  <div className="heading-container">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Northrop Grumman</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2019</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                      Developed a full stack web application using <b>React JS</b> and <b>Express</b> to help a team automate their workflow.
                      Application dealt with authentication, SQL queries, and file upload/storage.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right  duration={500}>
              <li className="timeline-inverted">
                <img className="timeline-badge logo" src={p3it_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Plus3 IT</h4>
                      <div className="timeline-subtitle">Cloud Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Winter 2018</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                      Developed a full stack cloud application using <b>Angular</b> and <b>Spring</b>. 
                      The web application was hosted through <b>Microsoft Azure</b> using App
                      Services and utilized both Azure Blob Storage and Azure SQL Servers.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide left  duration={500}>
              <li>
                <img className="timeline-badge logo" src={nga_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
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
            <Slide right  duration={500}>
              <li className="timeline-inverted">
                <img className="timeline-badge logo" src={nga_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
                    <div className="timeline-heading">
                      <h4 className="timeline-title-nga">National Geospatial-Intelligence Agency</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2017</small></div>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Worked on a webpage development team to create a web application that would aid in automating their work process.
                    The web application was developed in <b>React JS</b> and used <b>Flask</b> as the backend.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>

            <Slide left duration={500}>
              <li>
                <img className="timeline-badge logo" src={nga_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
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
                <img className="timeline-badge logo" src={ng_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Northrop Grumman</h4>
                      <div className="timeline-subtitle">Software Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Summer 2019</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                    Developed a full stack web application using <b>React JS</b> and <b>Express</b> to help a team automate their workflow.
                      Application dealt with authentication, SQL queries, and file upload/storage.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right>
              <li className="timeline-inverted">
                <img className="timeline-badge logo" src={p3it_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Plus3 IT</h4>
                      <div className="timeline-subtitle">Cloud Development Intern</div>
                      <div className="timeline-date"><small className="text-muted">Winter 2018</small></div>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <p>
                    Developed a full stack cloud application using <b>Angular</b> and <b>Spring</b>. 
                      The web application was hosted through <b>Microsoft Azure</b> using App
                      Services and utilized both Azure Blob Storage and Azure SQL Servers.
                  </p>
                  </div>
                </div>
              </li>
            </Slide>
            <Slide right>
              <li className="timeline-inverted">
                <img className="timeline-badge logo" src={nga_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
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
                <img className="timeline-badge logo" src={nga_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
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
                <img className="timeline-badge logo" src={nga_logo} alt="logo" />
                <div className="timeline-panel">
                  <div className="heading-container">
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
