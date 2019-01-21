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
        <div className='logo'><img
        src="https://www.google.com/drive/static/images/drive/logo-drive.png"
        alt="mplogo"
        height='100'
        width='100'
        />
        </div>
        <div className='mp'>eliot cloud</div>
        <Link to="/Home" className='loginButton'>Go to Eliot Cloud</Link>
        </div>
      </div>
    );
  }
}

export default Login;
