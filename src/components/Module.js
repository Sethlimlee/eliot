import React, { Component } from "react";

class Module extends Component {

  render() {
    console.log(this.props.id);
    return (
      <div className="plant">
        <div className="plantHeader">
          <div className="x">
            X
          </div>
        </div>
        <div className="plantName" onClick={this.props.sendCommand}>
          {this.props.name}
        </div>
        <div className="plantFooter">●</div>
      </div>
    );
  }
}

export default Module;