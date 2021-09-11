import React, { Component } from "react";
import { Row, Col } from "../../Components/Grid";
import { Buttom , Input } from "../../Components/Forms";
// import { Test } from "../../Components/Test/index"
import API from "../../Utilities/apiCalls";


class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  componentDidMount() {
    API.callBackend().then((response)=> {
        this.setState({data : response.data})
    });
  }


render () {
  return (
    <div>
        <Row>
          <Col size={"sm-6"}>
            <form style={{"marginTop": "30px"}}>
                <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username (required)"
                />
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email Address"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <Buttom
                  disabled={
                    !(
                      this.state.email &&
                      this.state.password &&
                      this.state.username
                    )
                  }
                  // onClick={this.checkFormSubmit}
                >
                  Sign Up
                </Buttom>
            </form>
          </Col>
          <Col size={"sm-6"}>

          </Col>
  
        </Row>
        
    </div>
    );
  };
};

export default SignUp;