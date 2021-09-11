import React, { Component } from "react";
import { Row, Col, Container } from "../../Components/Grid";
import { Buttom, Input } from "../../Components/Forms";
import Cookies from "js-cookie";
import API from "../../Utilities/apiCalls";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Making sure user submits a valid email

  emailValidation = (email) => {
    const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  // Password is at least 8 characters long
  // Contains at least one character
  // Contains at least one number

  passwordValidation = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    return passwordRegex.test(password);
  };


  formSubmit = (event) => {
    event.preventDefault();
    if(this.emailValidation(this.state.email.trim())){
        if(this.passwordValidation(this.state.password.trim())){
            let user = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
            }
            API.logUser(user).then((response)=> {
                if (response.data.token) {
                  Cookies.set("userToken", response.data.token);
                  window.location = "/Home"
                } else {
                  alert(response.data.message)
                }
                
            });
        } else {
            alert("Make sure that your password is correct");
        }
    } else {
    alert("Make sure that your email is valid");
    }
  }

  render() {
    return (
      <div>
        <Container style={{"margin": "30px"}}>
          <Row>
            <Col size={"sm-4"}>
              <form style={{ marginTop: "30px" }}>
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
                      this.state.password
                    )
                  }
                  onClick={this.formSubmit}
                >
                  LogIn
                </Buttom>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LogIn;
