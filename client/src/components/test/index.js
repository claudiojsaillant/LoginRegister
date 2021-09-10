import React, { Component } from 'react';
import API from "../../utilities/apiCalls";

class Test extends Component {
state = {
    data: null
  };

  componentDidMount() {
    API.callBackend().then((response)=> {
        this.setState({data : response.data})
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default Test;