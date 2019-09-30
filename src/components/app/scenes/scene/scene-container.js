import React from 'react'
import SceneView from './scene-view'

class Scene extends React.Component {

    constructor(props) {
        super(props)

        this.state = { showDetails: true }
        this.handleSceneClick = this.handleSceneClick.bind(this)
    }

    handleSceneClick() {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        return (
            <SceneView
                onClick={this.handleSceneClick}
                showDetails={this.state.showDetails}
                name={this.props.name}
                triggerTime={this.props.triggerTime}
                sceneType={this.props.sceneType}
                sceneDays={this.props.sceneDays}
            />
        )
    }
}

export default Scene