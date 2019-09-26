import React from 'react'
import ModuleView from './module-view'
import axios from 'axios'
import { getModuleStatus } from '../../../../data-access/modulesDAO'

class Module extends React.Component {

    CancelToken = axios.CancelToken;
    requestSource = this.CancelToken.source();

    constructor(props) {
        super(props)
        this.state = { status: '' }
    }

    componentDidMount() {
        this.getStatus()
    }

    componentWillUnmount() {
        this.requestSource.cancel()
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
        getModuleStatus(this.props.id, this.requestSource)
            .then(res => {
                if (res.status === 200)
                    this.setState({ status: 'connected' })
                else
                    this.setState({ status: 'disconnected' })
            })
            .catch((err) => {
                if (!axios.isCancel(err))
                    this.setState({ status: 'disconnected' })
            })
    }
}

export default Module