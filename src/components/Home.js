import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Plant from "./Plant";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      plants: []
    };
  }

  componentDidMount() {
    this.getPlants();
  }

  getPlants() {
    var token = "";
    var copyCookieToToken = document.cookie.split(";").filter(item => {
      if (item.includes("token")) {
        var justNumber = item.split("=")[1].toString();
        token = justNumber;
        this.setState({
          token: token
        });
      }
    });
    if (this.props.token !== "") {
      axios.get("/api/get/" + this.props.token).then(response => {
        console.log(this.props.token);
        this.setState({
          plants: response.data
        });
      });
    } else {
      axios.get("/api/get/" + token).then(response => {
        console.log(token);
        this.setState({
          plants: response.data
        });
      });
    }
  }

  getModules(id, token) {
    const url = `http://localhost:3000/#/Modules/${id}/${token}`;
    window.location.replace(url);
  }

  deletePlant(id, token) {
    axios.delete("/api/deletePlant/" + id + "/" + token).then(response => {
      this.setState({
        plants: response.data
      });
    });
  }

  render() {
    var plants = ''
    if(this.state.plants !== [] && this.state.plants !== ''){
    plants = this.state.plants.map(plant => (
      <Plant
        token={this.state.token}
        name={plant.name}
        key={plant.id}
        status={plant.status}
        id={plant.id}
        deletePlant={() => this.deletePlant(plant.id, this.state.token)}
        getModules={() => this.getModules(plant.id, this.state.token)}
      />
    ))};
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
