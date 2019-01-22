import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      test: ""
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/69/").then(response => {
      this.setState({
        test: response.data
      });
    });
  }

  handleInput(value) {
    this.setState({
      input: value
    });
  }

  handleClick() {
    axios
      .get("/api/get")
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
    if(this.state.input !== ''){console.log(this.state.input)}
    if(this.state.test !== ''){console.log(this.state.test)}
    return (
      <div>
        <div className="home">
          <input
            className="input"
            placeholder='no u'
            onChange={e => this.handleInput(e.target.value)}
          />
          <br/>
          <button onClick={() => this.handleClick()}>click me for magic</button>
        </div>
      </div>
    );
  }
}

export default Home;
