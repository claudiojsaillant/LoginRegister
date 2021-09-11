import React, { Component } from "react";
import { Row, Col } from "../../Components/Grid";
import { Buttom, Input } from "../../Components/Forms";
import API from "../../Utilities/apiCalls";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
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

  // Names cant have _,- or . at the beginning</li>
  // Names cant have __ or . or . or .. or .- or _- inside</li>
  // Names cant have _,- or . at the end</li>

  namesValidation = (firstName, lastName) => {
    const namesRegex = /^(?![.-])(?!.*[.]{2})[a-zA-Z0-9.-]+(?<![.])$/g;
    const firstValidation = new RegExp(namesRegex);
    const lastValidation = new RegExp(namesRegex);
    
    return firstValidation.test(firstName) && lastValidation.test(lastName);
  };

  formSubmit = (event) => {
    event.preventDefault();
    if(this.namesValidation(this.state.firstname.trim(), this.state.lastname.trim())){
      if(this.emailValidation(this.state.email.trim())){
        if(this.passwordValidation(this.state.password.trim())){
          let newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
          }

          API.sendNewUser(newUser).then((response)=> {
            alert(response.data.message);
            // Change location to Log In view
          });

        } else {
          alert("Make sure that the rules are beign followed for your password");
        }

      } else {
        alert("Make sure that your email is valid");
      }

    } else {
      alert("Make sure that the rules are beign followed for your last name and first name");
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col size={"sm-6"}>
            <form style={{ marginTop: "30px" }}>
              <Input
                value={this.state.firstname}
                onChange={this.handleInputChange}
                name="firstname"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastname}
                onChange={this.handleInputChange}
                name="lastname"
                placeholder="Last Name"
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
                    this.state.firstname &&
                    this.state.lastname
                  )
                }
                onClick={this.formSubmit}
              >
                Sign Up
              </Buttom>
            </form>
          </Col>
          <Col size={"sm-6"}></Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
