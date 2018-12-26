import React, {Component} from 'react';
import {Container, Jumbotron, Button} from 'reactstrap';
import './Stylesheets/Head.css';


class Head extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Jumbotron>
                        <h1 className="display-3"> Alex Yares</h1>
                        <Button>

                        <hr className="my-2"/>
                    </Jumbotron>
                </Container>

            </div>

        );
    }
}

export default Head;
