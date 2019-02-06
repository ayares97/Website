import React from 'react';
import {Card, CardBody, CardTitle} from "reactstrap";

class Education extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
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
        )
    }
}

export default Education;