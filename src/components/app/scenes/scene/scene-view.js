import React from 'react'
import './scene.css'

function SceneView(props) {

    const devices = props.devices.map((device, i) => {
        const name = device.deviceName
        const state = device.state
        const level = device.level ? ', ' + device.level + '%' : ''
        const deviceInfo = `${name}: ${state + level}`

        return <div key={i}>{deviceInfo}</div>
    })

    return (
        <div className="container" onClick={props.onClick}>
            <div className={`content ${props.showDetails ? 'details' : ''}`}>
                <div className="scene-info">
                    <span>{props.name}</span>
                    <span>{props.sceneDays}</span>
                    <span>{props.sceneType}</span>
                    <span>{props.triggerTime}</span>
                    <span>{props.offset}</span>
                </div>
                <div className="device-info">
                    {devices}
                </div>
            </div>
        </div>
    )
}

export default SceneView