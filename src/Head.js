import React, {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';

class Head extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Jumbotron>
                        <h1 className="display-3"> Alex Yares</h1>
                        <row>
                            <img src="./Images/github.png" alt="a" width="40" height="40"/>
                            <img src="./Images/linkedin.png" alt="b"/>
                            <img src="./Images/facebook.png" alt="c"/>
                        </row>
                        <hr className="my-2"/>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default Head;
