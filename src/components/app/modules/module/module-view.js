import React from "react";

function Module(props) {
  return (
    <div className="plant">
      <div className="plantHeader">
        <div className="x">
          X
          </div>
      </div>
      <div className="plantName" onClick={props.sendCommand}>
        {props.name}
      </div>
      <div className="plantFooter">●</div>
    </div>
  );
}

export default Module;