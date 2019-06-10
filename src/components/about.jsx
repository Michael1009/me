import React, { Component } from 'react';
import "./css/about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'


class About extends Component {

    render() {

        return (
            <div className="about">
                <div className="heading"> ABOUT ME </div>
                <div className="subheading"> WHO AM I? </div>
                <div className="description"> 
                    I am currently a Junior at the University of Virginia pursuing a Bachelors of Science in Computer Science. I have a passion for technology and am looking for challenging experiences to push the boundaries of what I know, as I am always eager to learn! My main interest is in software development and I am currently looking for an internship for Summer 2020 where I can work on a software development team. 
                </div>
                <br/>
                <div className="description"> 
                    Over the years I have worked on a variety of software development positions, from my role as a Mobile Application Developer for the National Geospatial-Intelligence Agency to just last winter where I developed a full-stack web application that was integrated with Microsoft Azure at Plus3 IT. In addition to my work experience, my course work at the University of Virginia has given me a solid foundation in Data Structures, Algorithms, and Software Development as a whole. 
                </div>

                <CardDeck> 
                 <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                </CardDeck>

               <div className="test">
               <FontAwesomeIcon icon="envelope"/>
               </div>

            </div>

            
        );
    }
}

export default About;
