import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Plant from "../plant/Plant";
import { getPlants, deletePlant } from '../../../data-access/plantsDAO'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      plants: []
    };
  }

  componentDidMount() {
    getPlants().then(res => this.setState({ plants: res.data }))
  }

  getModules(id, token) {
    const url = `http://localhost:3000/#/Modules/${id}/${token}`;
    window.location.replace(url);
  }

  deletePlant(id) {
    deletePlant(id).then(res => this.setState({ plants: res.data }))
  }

  render() {
    var plants = ''
    if (this.state.plants !== [] && this.state.plants !== '') {
      plants = this.state.plants.map(plant => (
        <Plant
          token={this.state.token}
          name={plant.name}
          key={plant.id}
          status={plant.status}
          id={plant.id}
          deletePlant={() => this.deletePlant(plant.id)}
          getModules={() => this.getModules(plant.id, this.state.token)}
        />
      ))
    };
    return (
      <div>
        <div className="plants">{plants}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { token } = state;
  return {
    token
  };
}

export default connect(mapStateToProps)(Home);
