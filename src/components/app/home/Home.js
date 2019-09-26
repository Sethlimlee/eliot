import React, { Component } from "react";
import axios from 'axios'
import { connect } from "react-redux";
import Plant from "../plant/plant";
import { getPlants, deletePlant } from '../../../data-access/plantsDAO'
import { setPlant } from '../plant/plant-actions'

class Home extends Component {

  CancelToken = axios.CancelToken;
  requestSource = this.CancelToken.source();

  constructor() {
    super();
    this.state = {
      token: "",
      plants: []
    };
  }

  componentDidMount() {
    getPlants(this.requestSource)
      .then(res => this.setState({ plants: res.data }))
      .catch(err => console.log)
  }

  componentWillUnmount() {
    this.requestSource.cancel();
  }

  getModules(id, token) {
    this.props.history.push(`Modules/${id}/${token}`)
    this.props.setPlant(id)
  }

  deletePlant(id) {
    deletePlant(id, this.requestSource)
      .then(res => this.setState({ plants: res.data }))
      .catch(err => console.log)
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

const dispatchToProps = {
  setPlant
}

export default connect(mapStateToProps, dispatchToProps)(Home);
