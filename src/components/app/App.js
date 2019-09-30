import React, { Component } from 'react';
import './App.css';
import routes from "../../shared/routes";
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  matchModulesLink(match, location) {
    if (location.pathname.includes('/Modules'))
      return true
    return false
  }

  render() {
    const plantId = this.props.selectedPlant
    const href = window.location.href.split('/#')[1];
    const navbarColor = href === '/' ? 'white' : 'lightblue'

    return (
      <div className="App" style={{ backgroundColor: navbarColor }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: navbarColor }}>
          <Link className="nav-link" to="/Home"><img src="https://wwl2-webapp-qa.azurewebsites.net/themes/legrand/assets/images/logoLegrand.png" width="120" height="30" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" strict to={`/Modules/${plantId}`} isActive={this.matchModulesLink}>Modules</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" strict to="/scenes">Scenes</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {routes}
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    selectedPlant: state.plantReducer.selectedPlant
  }
}

export default withRouter(connect(stateToProps)(App));