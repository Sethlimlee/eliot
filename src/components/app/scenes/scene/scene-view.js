import React from 'react'
import './scene.css'

function SceneView(props) {
    return (
        <div className="container" onClick={props.onClick}>
            <div className={`content ${props.showDetails ? 'details' : ''}`}>
                <div className="scene-info">
                    <span>{props.name}</span>
                    <span>{props.sceneDays}</span>
                    <span>{props.sceneType}</span>
                    <span>{props.triggerTime}</span>
                </div>
                <div className="device-info">
                    <div>Dev1: off, 100%</div>
                    <div>Dev2: on</div>
                    <div>Dev3: off, 3%</div>
                </div>
            </div>
        </div>
    )
}

export default SceneView