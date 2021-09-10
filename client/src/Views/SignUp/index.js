import React, { Component } from "react";
// import { Container, Row, Col } from "../../Components/Grid";
import { Buttom } from "../../Components/Forms";
import { Test } from "../../Components/Test/index"
import API from "../../Utilities/apiCalls";


class SignUp extends Component {
  componentDidMount() {
    API.callBackend().then((response)=> {
        this.setState({data : response.data})
    });
  }

render () {
  return (
    <div>
        <Test message="Message Here"/>
        <Buttom>Click here</Buttom>
    </div>
    );
  };
};

export default SignUp;