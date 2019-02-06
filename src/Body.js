import React from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row, Collapse} from 'reactstrap';
import './Stylesheets/Body.css';


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
                            <Card>
                                <CardTitle className='cardHeaders'> <p> <b> Education </b> <hr/> </p> </CardTitle>
                                <CardBody>
                                    <p>
                                        <a href="https://compsci.colostate.edu/" target="_blank" rel="noopener noreferrer">
                                        <b>Colorado State University</b><br/>
                                        </a>
                                        <i> Bachelor of Science - Computer Science</i><br/>
                                        <ul>
                                            <li> Graduation: Winter 2019 </li>
                                            <li> GPA: 3.52 </li>
                                            <li> Recent Coursework: </li>
                                                <ul>
                                                    <li> CS314: Software Engineering - A </li>
                                                    <li> CS440: Intro to AI - A </li>
                                                    <li> CS370: Operating Systems - A  </li>
                                                    <li> CS481: Blockchain Theory & Applications - A </li>
                                                </ul>
                                        </ul>
                                    </p>
                                    <p>
                                        <a href="https://www.athenian.org/page" target="_blank" rel="noopener noreferrer">
                                        <b> The Athenian School</b> <br/>
                                        </a>
                                        <i> High School Diploma</i> <br/>
                                        <ul>
                                            <li> Graduation: May 2015</li>
                                            <li> GPA: 3.32</li>
                                        </ul>
                                    </p>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='12' xs='12'>
                        <Card>
                            <CardTitle className='cardHeaders'> <p> <b> Experience</b> <hr/></p> </CardTitle>
                            <CardBody>
                                <p>
                                    <a href="https://www.wpafb.af.mil/Portals/60/documents/afrl/ri/ACE2018-Brochure.pdf?ver=2017-09-19-152504-233"
                                       target="_blank" rel="noopener noreferrer">
                                        <b>Advanced Course in Engineering (ACE)</b><br/>
                                    </a>
                                    <i> Air Force Research Labs - Rome NY </i> <br/>
                                    <ul>
                                        <li>10 week intensive research co-op</li>
                                        <li>Developed and researched Cybersecurity concepts for Air Force Research Labs (AFRL) </li>
                                        <li>Competed in international cyber warfare exercise <i> BLUE EDGE </i> </li>
                                        <ul>
                                            <li>Commanded 15 person Red Team </li>
                                        </ul>
                                        Skills Developed:
                                        <ul>
                                            <li>Network Mapping, Administration, and Analysis</li>
                                            <li>Stack Smashing & Buffer Overflows</li>
                                            <li>Advanced Persistent Threats (APT)</li>
                                            <li>Red Team Tactics</li>
                                            <li>Firewall & Antivirus Evasion</li>
                                            <li>Implant Development</li>
                                        </ul>
                                    </ul>
                                </p>
                                <p>
                                    <a href="https://lifewiregroup.com/" target="_blank" rel="noopener noreferrer">
                                        <b> LIFEWire Group</b> <br/>
                                    </a>
                                    <i> Fort Collins, CO - Quality Assurance Intern</i> <br/>
                                    Responsibilities:
                                    <ul>
                                        <li>Rigorously tested modules for deployment</li>
                                        <li>Assisted in error handling adjustments for modules</li>
                                        <li>Assisted in new module integration to production environment</li>
                                    </ul>
                                </p>
                                <p>
                                    <a href="https://www.afrotc.com/" target="_blank" rel="noopener noreferrer">
                                        <b>Air Force ROTC Field Training</b> <br/>
                                    </a>
                                    <i>Summer 2016</i> <br/>
                                    Skills Developed:
                                    <ul>
                                        <li>Team & Personnel Management</li>
                                        <li>Leadership Theory & Styles</li>
                                        <li>Stress & Deadline Management</li>
                                        <li>Interpersonal Skills</li>
                                    </ul>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Body;