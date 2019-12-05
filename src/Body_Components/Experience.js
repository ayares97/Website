import React from 'react';
import {Card, CardBody, CardTitle, Collapse} from "reactstrap";

//Styling
import '../Stylesheets/Body.css'

class Experience extends React.Component{
    constructor(props){
        super(props);

        this.toggleArrow = this.toggleArrow.bind(this);
    }

    toggleArrow(collapseState){
        if(!collapseState){
            return <img className="arrow" src={require("../Images/arrow-down.png")} alt="arrow"
                        onClick={this.props.toggleExperience}/>
        } else {
            return <img className="arrow" src={require("../Images/arrow.png")} alt="arrow"
                        onClick={this.props.toggleExperience}/>
        }
    }

    render(){
        return(
            <Card>
                <CardTitle className='cardHeaders'>
                    <b> Experience</b>
                    {this.toggleArrow(this.props.collapseExperience)}
                    <hr className='line-gap-control'/>
                </CardTitle>
                <Collapse isOpen={this.props.collapseExperience}>
                    <CardBody className='gap-control'>
                        <a href="https://www.ace-cyber.com/ace/"
                           target="_blank" rel="noopener noreferrer">
                            <b>Advanced Course in Engineering (ACE) - Graduate Assistant</b><br/>
                        </a>
                        <i> Air Force Research Labs - Rome NY </i>
                        <ul>
                            <li>Spearheaded development of Integrated SAM software leveraging Agile methodologies.</li>
                            <li>Developed Proof of Concept code for low-level security protocol, aiding current AFRL research efforts. </li>
                            <li>Managed 200+ simulated drones and 20 simulated SAMs in the international cyber-warfare exercise <i>BLUE EDGE</i>.</li>
                            <li>Assisted ACE leadership to ensure technical success and personal growth of 20 interns, 5 foreign officers, and 10 cadets. </li>
                        </ul>

                        <a href="https://www.ace-cyber.com/ace/"
                           target="_blank" rel="noopener noreferrer">
                            <b>Advanced Course in Engineering (ACE) - Cybersecurity Intern</b><br/>
                        </a>
                        <i> Air Force Research Labs - Rome NY </i>
                        <ul>
                            <li>Awarded Distinguished Graduate - Top 10% of the class. 1 of 3 interns invited to return as ACE Staff.</li>
                            <li>Lead research and development efforts on Automated Vulnerability Scanner for AFRL.</li>
                            <li>Competed in international cyber warfare exercise <i> BLUE EDGE </i> </li>
                            <li>Commanded team of 10 interns,  3 foreign officers, and 5 AF cadets in international cyber-warfare exercise <i>BLUE EDGE</i>.</li>
                            <li>Completed 9 week-long technical challenges spanning the security domain, including Reverse Engineering, Code-Level Attacks, and Network Warfare.</li>
                        </ul>
                        <a href="https://lifewiregroup.com/" target="_blank" rel="noopener noreferrer">
                            <b> LIFEWire Group</b><br/>
                        </a>
                        <i> Fort Collins, CO - Quality Assurance Intern</i> <br/>
                        Responsibilities:
                        <ul>
                            <li>Rigorously tested modules for deployment</li>
                            <li>Assisted in error handling adjustments for modules</li>
                            <li>Assisted in new module integration to production environment</li>
                        </ul>
                        <a href="https://www.afrotc.com/" target="_blank" rel="noopener noreferrer">
                            <b>Air Force ROTC Field Training</b><br/>
                        </a>
                        <i>Summer 2016</i> <br/>
                        Skills Developed:
                        <ul>
                            <li>Team & Personnel Management</li>
                            <li>Leadership Theory & Styles</li>
                            <li>Stress & Deadline Management</li>
                            <li>Interpersonal Skills</li>
                        </ul>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }

}

export default Experience;