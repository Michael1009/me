import React, { Component } from "react";
import "./css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "react-reveal/Slide";

class Timeline extends Component {
  render() {
    return (
      <div className="container">
        <div className="heading"> WORK </div>
        <div className="subheading"> TIMELINE </div>
        <ul className="timeline">
          <Slide left>
            <li>
              <div className="timeline-badge green">
                <FontAwesomeIcon icon="lightbulb" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 11 hours ago
                      via Twitter
                    </small>
                  </p>
                </div>
                <div className="timeline-body">
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                    paradis. Paisis, filhis, espiritis santis. Mé faiz elementum
                    girarzis, nisi eros vermeio, in elementis mé pra quem é
                    amistosis quis leo. Manduma pindureta quium dia nois paga.
                    Sapien in monti palavris qui num significa nadis i pareci
                    latim. Interessantiss quisso pudia ce receita de bolis, mais
                    bolis eu num gostis.
                  </p>
                </div>
              </div>
            </li>
          </Slide>
          <Slide right>
            <li className="timeline-inverted">
              <div className="timeline-badge blue">
                <FontAwesomeIcon icon="lightbulb" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                    paradis. Paisis, filhis, espiritis santis. Mé faiz elementum
                    girarzis, nisi eros vermeio, in elementis mé pra quem é
                    amistosis quis leo. Manduma pindureta quium dia nois paga.
                    Sapien in monti palavris qui num significa nadis i pareci
                    latim. Interessantiss quisso pudia ce receita de bolis, mais
                    bolis eu num gostis.
                  </p>
                </div>
              </div>
            </li>
          </Slide>
          <Slide left>
            <li>
              <div className="timeline-badge orange">
                <i className="glyphicon glyphicon-credit-card" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                    paradis. Paisis, filhis, espiritis santis. Mé faiz elementum
                    girarzis, nisi eros vermeio, in elementis mé pra quem é
                    amistosis quis leo. Manduma pindureta quium dia nois paga.
                    Sapien in monti palavris qui num significa nadis i pareci
                    latim. Interessantiss quisso pudia ce receita de bolis, mais
                    bolis eu num gostis.
                  </p>
                </div>
              </div>
            </li>
          </Slide>
          <Slide right>
            <li className="timeline-inverted">
              <div className="timeline-badge red">
                <FontAwesomeIcon icon="lightbulb" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                    paradis. Paisis, filhis, espiritis santis. Mé faiz elementum
                    girarzis, nisi eros vermeio, in elementis mé pra quem é
                    amistosis quis leo. Manduma pindureta quium dia nois paga.
                    Sapien in monti palavris qui num significa nadis i pareci
                    latim. Interessantiss quisso pudia ce receita de bolis, mais
                    bolis eu num gostis.
                  </p>
                </div>
              </div>
            </li>
          </Slide>

          <Slide left>
            <li>
              <div className="timeline-badge blue">
                <i className="glyphicon glyphicon-credit-card" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                    paradis. Paisis, filhis, espiritis santis. Mé faiz elementum
                    girarzis, nisi eros vermeio, in elementis mé pra quem é
                    amistosis quis leo. Manduma pindureta quium dia nois paga.
                    Sapien in monti palavris qui num significa nadis i pareci
                    latim. Interessantiss quisso pudia ce receita de bolis, mais
                    bolis eu num gostis.
                  </p>
                </div>
              </div>
            </li>
          </Slide>

          <Slide right>
            <li className="timeline-inverted">
              <div className="timeline-badge green">
                <FontAwesomeIcon icon="lightbulb" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                    paradis. Paisis, filhis, espiritis santis. Mé faiz elementum
                    girarzis, nisi eros vermeio, in elementis mé pra quem é
                    amistosis quis leo. Manduma pindureta quium dia nois paga.
                    Sapien in monti palavris qui num significa nadis i pareci
                    latim. Interessantiss quisso pudia ce receita de bolis, mais
                    bolis eu num gostis.
                  </p>
                </div>
              </div>
            </li>
          </Slide>
        </ul>
      </div>
    );
  }
}

export default Timeline;
