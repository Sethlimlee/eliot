import React, { Component } from "react";
import axios from "axios";
import Module from "./module/index";
import { getModules } from '../../../data-access/modulesDAO'


class Modules extends Component {

  CancelToken = axios.CancelToken;
  requestSource = this.CancelToken.source();

  constructor() {
    super();
    this.state = {
      modules: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id ? this.props.match.params.id : '';

    getModules(id, this.requestSource)
      .then(res => {
        const data = res.data.filter((val) => {
          return val.deviceType !== 'wifiGroup'
        })

        this.setState({ modules: data })
      })
      .catch(err => console.log)
  }

  componentWillUnmount() {
    this.requestSource.cancel();
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
