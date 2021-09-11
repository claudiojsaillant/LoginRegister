import React, { Component } from "react";
import { Row, Container } from "../../Components/Grid";

class About extends Component {

  render() {
    return (
      <div>
        <Container>
        <div className="mx-auto">
          <Row>
            <div style={{"margin" : "40px"}}>
            <h1 style={{"textAlign" : "center"}}>Thanks for taking a look into my app.</h1>
            </div>
            <div>
              
                <h3>Frameworks used</h3>
                <ul>
                    <li>Express</li>
                    <li>Mongoose as (Object Data Mapper)</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                </ul>
                <h3>Some of the libraries used</h3>
                <ul>
                    <li>Json Web Tokens and Cookies for authentification</li>
                    <li>Boostrap for front-end elements</li>
                    <li>React router</li>
                    <li>Jwt-decode for decoding in react</li>
                </ul>
                <h2>Database used: Mongo DB</h2>
            </div>
         
          </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;