import React from 'react'
import ScenesView from './scenes-view'
import { getScenes } from '../../../data-access/scenesDAO'

class Scenes extends React.Component {
    constructor(props) {
        super(props)

        this.state = { scenes: {} }
    }


    componentDidMount() {
        getScenes().then(res => this.setState({ scenes: res.data }))
        // getScenes().then(res => console.log(res.data))
    }

    render() {
        return (
            <ScenesView sceneData={this.state.scenes} />
        )
    }
}

export default Scenes