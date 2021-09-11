// import { get } from "js-cookie";
import React, { Component } from "react";
import { Row, Col } from "../../Components/Grid";
// import { Buttom, Input } from "../../Components/Forms";
// import API from "../../Utilities/apiCalls";
import { getSession } from "../../Utilities/sessionManger";
class Home extends Component {
  state = {
    name: "",
  };

  async componentDidMount() {
    const userInformation = await getSession();
    this.setState({name: userInformation.user.firstname + " " + userInformation.user.lastname})
  }

  render() {
    return (
      <div>
        <Row>
          <Col size={"sm-4"}>
            <h1>Welcome, {this.state.name}</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;