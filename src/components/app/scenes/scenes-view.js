import React from 'react'
import Scene from './scene/index'
import { fromMilitary, numDayToString, firstCapital } from '../../../shared/sceneHelpers'

function ScenesView(props) {

    let scenes = []
    for (let i in props.sceneData) {
        const name = props.sceneData[i].payload.name
        let sceneType = ''
        let triggerTime = ''
        let sceneDays = ''
        let devices = []

        if (props.sceneData[i].payload.schedule) {
            triggerTime = fromMilitary(props.sceneData[i].payload.schedule.triggerTime)
            sceneType = firstCapital(props.sceneData[i].payload.schedule.type)
            sceneDays = props.sceneData[i].payload.schedule.days.split(',')
            sceneDays = numDayToString(...sceneDays)
        }

        if (props.sceneData[i].payload.sceneDevices) {
            for (let device of props.sceneData[i].payload.sceneDevices) {
                const moduleId = device.eliotModuleId
                const deviceName = props.deviceNames[moduleId];
                if (deviceName) {
                    const formattedDevice = {
                        deviceName,
                        state: device.state.state
                    }

                    if (device.state.level)
                        formattedDevice['level'] = device.state.level
                    devices.push(formattedDevice)
                }
            }
        }

        scenes.push(
            <Scene
                name={name}
                triggerTime={triggerTime}
                sceneType={sceneType}
                sceneDays={sceneDays}
                devices={devices}
                key={i}
            />
        )
    }

    return (
        <div>
            {scenes}
        </div>
    )
}

export default ScenesView