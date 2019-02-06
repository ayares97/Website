import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

//Styling
import "../Stylesheets/Body.css";

class Leadership extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Card>
                <CardTitle className="cardHeaders"> <p><b>Leadership & Awards</b></p><hr/></CardTitle>
                <CardBody>
                    <p>
                        <b className="miniHeaders"> Advanced Course in Engineering (ACE) </b>
                        - Distinguished Graduate (Top 10%) <br/>
                        <b className="miniHeaders"> AFROTC Field Training </b> - Superior Performer (Top 20%) <br/>
                        <b className="miniHeaders"> Colorado State University </b> - Dean's List (Fall 2015 & Fall 2018) <br/>
                        <b className="miniHeaders"> AFROTC </b> - Cadet of the Quarter (Fall 2016) <br/>
                    </p>
                </CardBody>
            </Card>

        );
    }
}

export default Leadership;