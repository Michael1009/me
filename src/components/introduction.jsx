import React, { Component } from 'react';
import "./css/introduction.css";
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Introduction extends Component {

    render() {

        return (


            <div className="introduction">
                <div className="splash_pic"></div>
                <Typist
                    avgTypingDelay={80}
                    cursor={{ show: false, hideWhenDone: true }}
                    startDelay={1000}>
                    <div className="typing_header">
                        <div><span>Hi, I'm Michael!</span></div>
                        {/* <Typist.Backspace count={14} delay={2000} /> */}
                    </div>

                    <Typist.Delay ms={500} />

                    <div className="activities">
                        <div className="activities_header">Things I Enjoy in Life</div>
                        <Typist.Delay ms={200} />
                        <div><FontAwesomeIcon icon="laptop-code" />  Coding</div>
                        <Typist.Delay ms={200} />
                        <div><FontAwesomeIcon icon="mountain" />  Hiking</div>
                        <Typist.Delay ms={200} />
                        <div><FontAwesomeIcon icon="dumbbell" />  Weight Lifting</div>
                        <Typist.Delay ms={200} />
                        <div><FontAwesomeIcon icon="plane" /> Traveling</div>
                        <Typist.Delay ms={200} />
                        <div>......</div>
                        <Typist.Backspace count={6} delay={750} />
                        <div>and  <FontAwesomeIcon icon="camera-retro" />  <FontAwesomeIcon icon="images" />'s along the way :)</div>
                        {/* <Typist.Backspace count={14} delay={2000} /> */}
                    </div>
                </Typist>



            </div>
        );
    }
}

export default Introduction;
