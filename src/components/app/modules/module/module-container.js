import React, { Component } from 'react'
import ModuleView from './module-view'

class Module extends React.Component {

    render() {
        return (
            <ModuleView
                key={this.props.id}
                name={this.props.name}
                id={this.props.id}
                sendCommand={this.props.sendCommand}
                status={this.props.status} />
        );
    }
}

export default Module