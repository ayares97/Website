import React from 'react';
import {Card, CardBody, CardTitle, Collapse} from 'reactstrap';

//Styling
import "../Stylesheets/Body.css";

class Leadership extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Card>
                <CardTitle className="cardHeaders"> <p><b>Leadership & Awards</b></p><hr className='line-gap-control'/></CardTitle>
                <Collapse isOpen={this.props.collapseLeadership}>
                    <CardBody className='gap-control'>
                        <p>
                            <b className="miniHeaders"> Advanced Course in Engineering (ACE) </b>
                            - Distinguished Graduate (Top 10%) <br/>
                            <b className="miniHeaders"> AFROTC Field Training </b> - Superior Performer (Top 20%) <br/>
                            <b className="miniHeaders"> Colorado State University </b> - Dean's List (Fall 2015 & Fall 2018) <br/>
                            <b className="pullup"> AFROTC </b> - Cadet of the Quarter (Fall 2016) <br/>
                        </p>
                    </CardBody>
                </Collapse>
            </Card>

        );
    }
}

export default Leadership;