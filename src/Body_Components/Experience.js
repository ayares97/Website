import React from 'react';
import {Card, CardBody, CardTitle} from "reactstrap";

//Styling
import '../Stylesheets/Body.css'

class Experience extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card>
                <CardTitle className='cardHeaders'> <p> <b> Experience</b> </p> <hr className='line-gap-control'/> </CardTitle>
                <CardBody className='gap-control'>
                    <a href="https://www.wpafb.af.mil/Portals/60/documents/afrl/ri/ACE2018-Brochure.pdf?ver=2017-09-19-152504-233"
                       target="_blank" rel="noopener noreferrer">
                        <b>Advanced Course in Engineering (ACE)</b><br/>
                    </a>
                    <i> Air Force Research Labs - Rome NY </i>
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
            </Card>
        )
    }

}

export default Experience;