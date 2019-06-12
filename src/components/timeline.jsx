import React, { Component } from "react";
import "./css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Timeline extends Component {
  render() {
    return (
      <div className="container">
        <div className="heading"> WORK </div>
        <div className="subheading"> TIMELINE </div>
        <ul class="timeline">
            <li>
              <div class="timeline-badge green"><FontAwesomeIcon icon="lightbulb" /></div>
              <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge blue"><FontAwesomeIcon icon="lightbulb" /></div>
              <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge orange"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge red"><FontAwesomeIcon icon="lightbulb" /></div>
              <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge blue"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge green"><FontAwesomeIcon icon="lightbulb" /></div>
              <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
              </div>
            </li>

        </ul>
      </div>
    );
  }
}

export default Timeline;
