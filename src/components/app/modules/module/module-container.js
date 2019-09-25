import React from 'react'
import ModuleView from './module-view'
import { getModuleStatus } from '../../../../data-access/modulesDAO'

class Module extends React.Component {

    constructor(props) {
        super(props)
        this.state = {status: ''}
    }
    
    componentDidMount() {
        this.getStatus()
    }

    render() {
        return (
            <ModuleView
                key={this.props.id}
                name={this.props.name}
                id={this.props.id}
                sendCommand={this.props.sendCommand}
                status={this.state.status} />
        );
    }

    getStatus() {
        getModuleStatus(this.props.id)
            .then(res => {
                if (res.status === 200) 
                    this.setState({status: 'connected'})
                else 
                    this.setState({status: 'disconnected'})
            })
            .catch(() => {
                this.setState({status: 'disconnected'})
            })
    }
}

export default Module