import React from 'react';
import {Jumbotron, Row, Container, Col, Button} from 'reactstrap';
import './Stylesheets/Head.css'

class Head extends React.Component{
    constructor(props) {
        super(props);
        this.sendEmail = this.sendEmail.bind(this);
    }


    sendEmail(){
        window.location.href = "mailto:alex@yares.net";
    }

    render(){
        return(
            <Container fluid>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h1 className="display-3"> Alex Yares</h1>
                                <row>
                                    <a href="https://www.github.com/ayares97" target="_blank" rel="noopener noreferrer">
                                        <img className="image" src={require("./Images/github.png")} alt="Github"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/alex-yares-9ab052117/" target="_blank"
                                       rel="noopener noreferrer">
                                        <img className='image' src={require("./Images/linkedin.png")} alt="Linkedin"/>
                                    </a>
                                    <a href="https://www.facebook.com/alex.yares" target="_blank" rel="noopener noreferrer">
                                        <img className='image' src={require('./Images/facebook.png')} alt="Facebook"/>
                                    </a>
                                    <Button className='emailButton' onClick={this.sendEmail}> Contact me </Button>
                                </row>
                                <hr className="my-2"/>
                                <p> A passionate and driven programmer seeking new and exciting challenges to solve. </p>
                            </Jumbotron>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default Head;
