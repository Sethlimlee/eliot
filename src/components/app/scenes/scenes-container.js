import React from 'react'
import { connect } from "react-redux";
import ScenesView from './scenes-view'
import { getScenes } from '../../../data-access/scenesDAO'
import { getModules } from '../../../data-access/modulesDAO'

class Scenes extends React.Component {
    constructor(props) {
        super(props)

        this.state = { scenes: {}, devices: {} }
    }


    componentDidMount() {
        Promise.all([getScenes(), getModules(this.props.selectedPlant)])
            .then((res) => {
                this.setState({ scenes: res[0].data })

                const data = res[1].data.reduce((result, device) => {
                    if (device.deviceType !== 'wifiGroup') {
                        result[device.id] = device.name
                    }
                    return result
                }, {})

                this.setState({ devices: data })
            })
            .catch(err => console.log)
    }

    render() {
        return (
            <ScenesView
                sceneData={this.state.scenes}
                deviceNames={this.state.devices} />
        )
    }
}

function stateToProps(state) {
    const { selectedPlant } = state.plantReducer
    return {
        selectedPlant
    }
}

export default connect(stateToProps)(Scenes)