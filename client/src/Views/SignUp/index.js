import React, { Component } from "react";
import { Row, Col, Container } from "../../Components/Grid";
import { Buttom, Input } from "../../Components/Forms";
import API from "../../Utilities/apiCalls";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  // Instantly puts the user input in state

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

  // Names cant have _,- or . at the beginnin
  // Names cant have __ or . or . or .. or .- or _- inside<
  // >Names cant have _,- or . at the end<

  namesValidation = (firstName, lastName) => {
    const namesRegex = /^(?![.-])(?!.*[.]{2})[a-zA-Z0-9.-]+(?<![.])$/g;
    const firstValidation = new RegExp(namesRegex);
    const lastValidation = new RegExp(namesRegex);
    
    return firstValidation.test(firstName) && lastValidation.test(lastName);
  };

  // Makes sure all the inputs are correct before sending them to the API

  formSubmit = (event) => {
    event.preventDefault();
    if(this.namesValidation(this.state.firstname.trim(), this.state.lastname.trim())){
      if(this.emailValidation(this.state.email.trim())){
        if(this.passwordValidation(this.state.password.trim())){

          let newUser = {
            firstname: this.state.firstname.trim(),
            lastname: this.state.lastname.trim(),
            email: this.state.email.trim(),
            password: this.state.password.trim()
          }

          API.sendNewUser(newUser).then((response)=> {
            alert(response.data.message);
            window.location = "/LogIn"
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
        <Container style={{"margin": "30px"}}>
          <h1>Sign Up</h1>
          <Row>
            <Col size={"sm-4"}>
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
            <Col size={"sm-8"}>
              <h3>Passwords</h3>
              <ul>
                <li>Password is at least 8 characters long</li>
                <li>Contains at least one character</li>
                <li>Contains at least one number</li>
              </ul>
              <h3>Names</h3>
              <ul>
                <li>Names cant have _,- or . at the beginning</li>
                <li>Names cant have __ or . or . or .. or .- or _- inside</li>
                <li>Names cant have _,- or . at the end</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignUp;
