import React, { Component } from "react";
import axios from "axios";
import Module from "./module/index";
import { getModules } from '../../../data-access/modulesDAO'


class Modules extends Component {
  constructor() {
    super();
    this.state = {
      modules: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    getModules(id).then(res => {
      const data = res.data.filter((val) => {
        return val.deviceType !== 'wifiGroup'
      })

      this.setState({ modules: data })
    })
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
