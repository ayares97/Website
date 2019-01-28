import React from 'react';
import {Jumbotron, Row, Container, Col} from 'reactstrap';
import './Stylesheets/Head.css'

class Head extends React.Component{
    render(){
        return(
            <Container>

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
                                </row>
                                <hr className="my-2"/>
                            </Jumbotron>
                        </Col>
                        <Col>
                            <p>  </p>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default Head;
