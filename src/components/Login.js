import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="splash">
          <div className="logo">
            <img
              src="https://www.legrand.us/-/media/images/modularcontent/generalfeatures/eliot-landing/eliot-logo-550x550.ashx"
              alt="mplogo"
              height="550"
              width="550"
            />
          </div>
          <Link to="/Home" className="loginButton">
            Go to Eliot Cloud
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
