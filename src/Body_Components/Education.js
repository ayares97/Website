import React from 'react';
import {Card, CardBody, CardTitle, Collapse} from "reactstrap";

class Education extends React.Component{
    constructor(props){
        super(props);

        this.toggleArrow = this.toggleArrow.bind(this);
    }

    toggleArrow(collapseState){
        if(!collapseState){
            return <img className="arrow" src={require("../Images/arrow-down.png")} alt="arrow"
                        onClick={this.props.toggleEducation}/>
        } else {
            return <img className="arrow" src={require("../Images/arrow.png")} alt="arrow"
                        onClick={this.props.toggleEducation}/>
        }
    }

    render() {
        return(
            <Card>
                <CardTitle className='cardHeaders'>
                    <b> Education </b>
                    {this.toggleArrow(this.props.collapseEducation)}
                    <hr className='line-gap-control'/>
                </CardTitle>
                <Collapse isOpen={this.props.collapseEducation}>
                    <CardBody className="gap-control">
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
                                <li> CS457: Computer Networks - A </li>
                                <li> CS475: Parallel Computing - A </li>
                            </ul>
                        </ul>

                        <a href="https://www.athenian.org/page" target="_blank" rel="noopener noreferrer">
                            <b> The Athenian School</b> <br/>
                        </a>
                        <i> High School Diploma</i> <br/>
                        <ul>
                            <li> Graduation: May 2015</li>
                            <li> GPA: 3.32</li>
                        </ul>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default Education;