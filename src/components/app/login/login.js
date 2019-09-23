import React, { Component } from "react";
import './login.css'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };

    this.tokenChange = this.tokenChange.bind(this);
    this.devLogin = this.devLogin.bind(this);
    this.enterKeyLogin = this.enterKeyLogin.bind(this);
  }

  componentWillMount() {
    if (this.getCookie('token')) {
      window.location.replace('#/Home');
    }
  }

  tokenChange(e) {
    const token = e.target.value;
    this.setState({ token: token });
  }

  enterKeyLogin(e) {
    if (e.keyCode === 13) {
      this.devLogin();
    }
  }

  devLogin() {
    if (!this.state.token) {
      alert('Hey, where is your token?');
      return;
    }

    document.cookie = `token=${this.state.token}; max-age=${1 * 60 * 60}`;
    window.location.replace('#/Home');
  }

  login() {
    const url =
      "https://login.microsoftonline.com/tfp/eliotclouduamqa.onmicrosoft.com/B2C_1_Eliot-SignUpOrSignIn/oauth2/v2.0/authorize?response_type=token&state=&client_id=3f82e316-1e1d-42f0-8ab2-0e7ba3f51eb7&scope=https%3A%2F%2Feliotclouduamqa.onmicrosoft.com%2Fsecurity%2Faccess.full&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
    window.location.replace(url);
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
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
          <div className="col">
            <div className="dev-login splash">
              <div className="logo">
                <img
                  src="https://cdn.pixabay.com/photo/2015/12/04/22/20/gear-1077550_960_720.png"
                  alt="mplogo"
                  height="475"
                  width="475"
                />
              </div>
              <input className="form-control access-token" placeholder="Enter access token" onChange={this.tokenChange} onKeyUp={this.enterKeyLogin}></input>
              <button className="btn btn-warning loginButton" onClick={this.devLogin}>Dev Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
