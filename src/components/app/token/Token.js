import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateToken } from '../../../shared/user'

class Token extends Component {

  componentDidMount() {
    document.cookie = `token=${this.props.location.pathname.split("=")[1].split("&")[0]}; path=http://localhost:3000/`;
    this.props.updateToken(this.props.location.pathname.split("=")[1].split("&")[0])
    const url = "http://localhost:3000/#/Home";
    window.location.replace(url);
  }

  render() {
    return <div className="in"></div>;
  }
}

function mapStateToProps(state) {
  const { token } = state
  return {
    token
  }
}

export default connect(mapStateToProps, { updateToken })(Token);
