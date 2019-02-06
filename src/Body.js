import React from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row, Collapse} from 'reactstrap';
import './Stylesheets/Body.css';

//Import content
import Experience from "./Body_Components/Experience";
import Education from "./Body_Components/Education";


class Body extends React.Component{
    constructor(props){
        super(props);

        //State manages the toggles for each of the cards
        this.state = {
            collapseEducation: true,
            collapseExperience: true,
            collapseSkills: true
        };

        //Functions toggle the visibility of different cards on screen
        this.toggleEducation = this.toggleEducation.bind(this);
        this.toggleExperience = this.toggleExperience.bind(this);
        this.toggleSkills = this.toggleSkills.bind(this);
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

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col lg='6' md= '6' sm='12' xs='12'>
                        <Collapse isOpen={this.state.collapseEducation}>
                            <Education/>
                        </Collapse>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='12' xs='12'>
                       <Experience/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Body;