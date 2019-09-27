import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './module.css'

function ModuleView(props) {

  let status = 'Loading...'
  let statusIcon = <FontAwesomeIcon className="cog-spin" icon={faCog} />

  if (props.status !== undefined && props.status !== '') {
    status = props.status[0].toUpperCase() + props.status.slice(1)
    statusIcon = '●'
  }

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
      <div className={`plantFooter ${props.status}`}>{statusIcon} {status}</div>
    </div>
  );
}

export default ModuleView;