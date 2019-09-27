import React from 'react'
import './scene.css'

function SceneView(props) {
    return (
        <div className="container" onClick={props.onClick}>
            <div className={`content ${props.showDetails ? 'details' : ''}`}>
                <div className="scene-info">
                    <span>sc3 super long scene name</span>
                    <span>M,T,W,Th,F,S,Su</span>
                    <span>Time</span>
                    <span>13:45</span>
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