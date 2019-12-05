import React from 'react';
import {Card, CardBody, CardTitle, Collapse} from 'reactstrap';

//Styling
import '../Stylesheets/Body.css';

class Skills extends React.Component{
    constructor(props){
        super(props);

        this.toggleArrow = this.toggleArrow.bind(this);
    }

    toggleArrow(collapseState){
        if(!collapseState){
            return <img className="arrow" src={require("../Images/arrow-down.png")} alt="arrow"
                        onClick={this.props.toggleSkills}/>
        } else {
            return <img className="arrow" src={require("../Images/arrow.png")} alt="arrow"
                        onClick={this.props.toggleSkills}/>
        }
    }

    render() {
        return (
            <Card>
                <CardTitle className="cardHeaders">
                    <b> Skills & Qualifications </b>
                    {this.toggleArrow(this.props.collapseSkills)}
                    <hr className='line-gap-control'/> </CardTitle>
                <Collapse isOpen={this.props.collapseSkills}>
                    <CardBody className='gap-control pushdown'>
                        <b className="miniHeaders"> Current US Government Security Clearance </b>
                        <ul>
                            <li>TS - October 2019</li>
                        </ul>
                        <b className="miniHeaders"> Languages</b> <br/>
                        <ul>
                            <li>Java & Javascript (Node.js & React)</li>
                            <li>C & C++</li>
                            <li>Python</li>
                            <li>GoLang</li>
                            <li>HTML & CSS</li>
                            <li>PHP</li>
                            <li>Bash</li>
                            <li>SQL</li>
                        </ul>
                        <b className="miniHeaders">Processes</b><br/>
                        <ul>
                            <li>Agile Development</li>
                            <li>Version Control - Git</li>
                        </ul>
                        <b className="miniHeaders">Systems</b><br/>
                        <ul>
                            <li>Amazon Web Services</li>
                            <li>Apache Web Servers</li>
                            <li>SQL Database Design</li>
                            <li>LAMP Stack</li>
                        </ul>
                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}

export default Skills;