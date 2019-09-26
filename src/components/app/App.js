import React, { Component } from 'react';
import './App.css';
import routes from "../../routes";
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    const href = window.location.href.split('/#')[1];
    const navbarColor = href === '/' ? 'white' : 'lightblue'

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: navbarColor }}>
          <Link className="nav-link" to="/Home"><img src="https://wwl2-webapp-qa.azurewebsites.net/themes/legrand/assets/images/logoLegrand.png" width="120" height="30" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${href.includes('/Home') ? 'active' : ''}`}>
                <Link className="nav-link" to="/Home">Home</Link>
              </li>
              <li className={`nav-item ${href.includes('/Modules') ? 'active' : ''}`}>
                <Link className="nav-link" to="/Modules/b1e4212d-7872-4294-9c5e-23f4746c8ef3">Modules</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Scenes</a>
              </li>
            </ul>
          </div>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
