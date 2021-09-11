// import { get } from "js-cookie";
import React, { Component } from "react";
import { Row, Col, Container } from "../../Components/Grid";
import { Link } from "react-router-dom";

class Homepage extends Component {

  render() {
    return (
      <div>
        <Container>
        <div className="mx-auto">
          <Row>
            <div style={{"margin" : "40px"}}>
            <h1 style={{"textAlign" : "center"}}>Welcome to a simple Login / Register App!</h1>
            </div>
            
            <Col size={"lg-6"}>
              
              <Link to="/SignUp" className="nav-link active">
                <div className="btn btn-primary justify-content-end">Sign Up</div>
              </Link>
              <Link to="/LogIn" className="nav-link active">
                <div className="btn btn-primary justify-content-end">Log In</div> 
              </Link>
            </Col>
         
          </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Homepage;
