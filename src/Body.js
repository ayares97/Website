import React from 'react';
import {Col, Container, Row, Collapse, Button} from 'reactstrap';
import './Stylesheets/Body.css';

//Import content
import Experience from "./Body_Components/Experience";
import Education from "./Body_Components/Education";
import Skills from "./Body_Components/Skills";
import Leadership from "./Body_Components/Leadership";

class Body extends React.Component{
    constructor(props){
        super(props);

        //State manages the toggles for each of the cards
        this.state = {
            collapseEducation: true,
            collapseExperience: true,
            collapseSkills: true,
            collapseLeadership: true
        };

        //Functions toggle the visibility of different cards on screen
        this.toggleEducation = this.toggleEducation.bind(this);
        this.toggleExperience = this.toggleExperience.bind(this);
        this.toggleSkills = this.toggleSkills.bind(this);
        this.toggleLeadership = this.toggleLeadership.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    toggleEducation(){
        this.setState({collapseEducation: !this.state.collapseEducation});
    }

    toggleExperience(){
        this.setState({collapseExperience: !this.state.collapseExperience});
    }

    toggleSkills(){
        this.setState({collapseSkills: !this.state.collapseSkills});
    }

    toggleLeadership(){
        this.setState({collapseLeadership: !this.state.collapseLeadership});
    }

    sendEmail(){
        window.location.href = "mailto:alex@yares.net";
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col xl='6' lg='6' md= '6' sm='12' xs='12'>
                        <Collapse isOpen={this.state.collapseEducation}>
                            <Education/>
                        </Collapse>
                        <br/>
                        <Skills/>
                        <br/>
                    </Col>

                    <Col xl='6' lg='6' md='6' sm='12' xs='12'>
                       <Experience/>
                       <br/>
                       <Leadership/>
                       <br/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center"><Button className='emailButton' onClick={this.sendEmail}> Contact me </Button></Col>
                </Row>
                <br/>
            </Container>
        )
    }
}

export default Body;