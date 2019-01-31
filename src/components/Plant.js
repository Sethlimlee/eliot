import React, { Component } from "react";

class Plant extends Component {

  render() {
    return (
      <div className="plant">
        <div className="plantHeader">
          <div
            className="x"
            onClick={() => {
              this.props.deletePlant();
            }}
          >
            X
          </div>
        </div>
        <div className="plantName">{this.props.name}</div>
        <div className="plantFooter">● {this.props.status}</div>
      </div>
    );
  }
}

export default Plant;
