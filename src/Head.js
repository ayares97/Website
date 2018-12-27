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
                            <a href="https://www.github.com/ayares97">
                                <img src="Images/github.png" alt="Github"/>
                            </a>
                            <img src= "./Images/linkedin.png" alt="Linkedin"/>
                            <img src= "facebook.png" alt="Facebook"/>

                        </row>
                        <hr className="my-2"/>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default Head;
