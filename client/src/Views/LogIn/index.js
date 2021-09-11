import React, { Component } from "react";
import { Row, Col } from "../../Components/Grid";
import { Buttom, Input } from "../../Components/Forms";
// import API from "../../Utilities/apiCalls";

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
            // let user = {
            // email: this.state.email.trim(),
            // password: this.state.password.trim()
            // }
            // API.sendNewUser(user).then((response)=> {
            //     alert(response.data.message);
            //     // Change location to homepage
            // });
        } else {
            alert("Make sure that the rules are beign followed for your password");
        }
    } else {
    alert("Make sure that your email is valid");
    }
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default LogIn;
