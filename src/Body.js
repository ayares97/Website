import React from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row} from 'reactstrap';
import './Stylesheets/Body.css';



class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col lg='6' md= '6' sm='12' xs='12'>
                        <Card>
                            <CardTitle className='cardHeaders'> <p> <b> Education </b> <hr/> </p> </CardTitle>
                            <CardBody>
                                <p>
                                    <b>Colorado State University</b> <br/>
                                    <i> Bachelor of Science - Computer Science </i> <br/>
                                    <ul>
                                        <li> Graduation: Winter 2019 </li>
                                        <li> GPA: 3.52 </li>
                                        <li> Relevant Coursework: </li>
                                            <ul>
                                                <li> CS314: Software Engineering - A </li>
                                                <li> CS440: Intro to AI - A </li>
                                                <li> CS370: Operating Systems - A  </li>
                                                <li> CS481: Blockchain Theory & Applications - A </li>
                                            </ul>
                                    </ul>
                                </p>
                                <p>
                                    <b> The Athenian School</b> <br/>
                                    <i> High School Diploma - May 2015</i>
                                    <ul>
                                        <li> GPA: 3.32</li>
                                        <li> </li>
                                    </ul>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='12' xs='12'>
                        <Card>
                            <CardTitle className='cardHeaders'> <p> <b> Experience </b> <hr/> </p> </CardTitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Body;