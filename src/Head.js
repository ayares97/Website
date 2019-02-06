import React from 'react';
import {Jumbotron, Row, Container, Col, Button} from 'reactstrap';
import './Stylesheets/Head.css'

class Head extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <Container fluid>
                    <Row>
                        <Col>
                            <br/>
                            <Jumbotron>
                                <h1 className="name"> Alex Yares</h1>
                                <Row>
                                    <a href="https://www.github.com/ayares97" target="_blank" rel="noopener noreferrer">
                                        <img className="first-image" src={require("./Images/github.png")} alt="Github"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/alex-yares-9ab052117/" target="_blank"
                                       rel="noopener noreferrer">
                                        <img className='image' src={require("./Images/linkedin.png")} alt="Linkedin"/>
                                    </a>
                                    <a href="https://www.facebook.com/alex.yares" target="_blank" rel="noopener noreferrer">
                                        <img className='image' src={require('./Images/facebook.png')} alt="Facebook"/>
                                    </a>
                                </Row>
                                <hr className="my-2"/>
                                <p> A passionate, creative, and driven programmer seeking new and exciting challenges to solve.
                                My primary area of interest is in Cybersecurity, especially concerning the applications of
                                    Blockchain and AI technologies. I'm currently a Senior with an expected graduation date of
                                    Winter 2019.</p>
                            </Jumbotron>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default Head;
