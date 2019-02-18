import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Module from "./Module";
import Plant from "./Plant";

class Modules extends Component {
  constructor() {
    super();
    this.state = {
      modules: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "/api/getModules/" +
          this.props.match.params.id +
          "/" +
          this.props.match.params.token
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          modules: response.data
        });
      });
  }

  sendCommand(id, token) {
    axios.post("/api/sendCommand/" + id + "/" + token).then(response => {
      console.log("mission complete");
    });
  }

  render() {
    if (this.state.modules !== "") {
      var modules = this.state.modules.map(device => (
        <Module
          key={device.id}
          name={device.name}
          id={device.id}
          sendCommand={() => this.sendCommand(device.id, this.props.match.params.token)}
        />
      ));
    }
    return (
      <div>
        <div className="plants">{modules}</div>
      </div>
    );
  }
}

export default Modules;
