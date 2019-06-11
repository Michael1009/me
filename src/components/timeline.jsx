import React, { Component } from "react";
import "./css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">

        <div className="heading"> WORK </div>
        <div className="subheading"> TIMELINE </div>

        <ul className="cbp_tmtimeline">
          <li>
            <div className="cbp_tmicon icon-1" />
            <div className="cbp_tmlabel">
              <div className="title">Ricebean black-eyed pea</div>
              <p>Winter purslane...</p>
            </div>
          </li>
          <li>
            <div className="cbp_tmicon cbp_tmicon-screen" />
            <div className="cbp_tmlabel">
              <div className="title">>Greens radish arugula</div>
              <p>Caulie dandelion maize...</p>
            </div>
          </li>
          <li>
            <div className="cbp_tmicon cbp_tmicon-mail" />
            <div className="cbp_tmlabel">
              <div className="title">>Sprout garlic kohlrabi</div>
              <p>Parsnip lotus root...</p>
            </div>
          </li>
          <li>
            <div className="cbp_tmicon cbp_tmicon-phone" />
            <div className="cbp_tmlabel">
              <div className="title">>Watercress ricebean</div>
              <p>Peanut gourd nori...</p>
            </div>
          </li>
          <li>
            <div className="cbp_tmicon cbp_tmicon-earth" />
            <div className="cbp_tmlabel">
              <div className="title">>Courgette daikon</div>
              <p>Parsley amaranth tigernut...</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Timeline;
