import React, { Component } from "react";

class Login extends Component {

  login() {
    const url =
      "https://login.microsoftonline.com/tfp/eliotclouduamqa.onmicrosoft.com/B2C_1_Eliot-SignUpOrSignIn/oauth2/v2.0/authorize?response_type=token&state=&client_id=3f82e316-1e1d-42f0-8ab2-0e7ba3f51eb7&scope=https%3A%2F%2Feliotclouduamqa.onmicrosoft.com%2Fsecurity%2Faccess.full&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
      window.location.replace(url);
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
          <div className="loginButton" onClick={this.login}>
            Go to Eliot Cloud
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
