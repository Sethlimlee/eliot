import React from 'react'
import Scene from './scene/index'
import fromMilitary from '../../../shared/fromMilitary'

function ScenesView(props) {

    let scenes = []
    for (let i in props.sceneData) {
        const name = props.sceneData[i].payload.name
        let triggerTime = ''

        if (props.sceneData[i].payload.schedule) {
            triggerTime = fromMilitary(props.sceneData[i].payload.schedule.triggerTime)
        }

        scenes.push(
            <Scene
                name={name}
                triggerTime={triggerTime}
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