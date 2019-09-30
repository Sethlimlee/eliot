import axios from 'axios'
import { getStandardHeaders } from '../shared/auth'

function getModules(id, cancel = { token: '' }) {
    const headers = { ...getStandardHeaders(), cancelToken: cancel.token };
    let url = `/servicecatalog/api/v2.0/modules`;

    if (id)
        url = `/servicecatalog/api/v2.0/plants/${id}/modules`;

    return axios.get(url, headers);
}

function getModuleStatus(id, cancel = { token: '' }) {
    const headers = { ...getStandardHeaders(), cancelToken: cancel.token };
    const url = `/devicemanagement/api/v2.0/modules/${id}/commands/getState`;
    const body = {
        "timeout": 20,
        "command": {
            "correlationID": "ExampleCorrelationID124"
        }
    }

    return axios.post(url, body, headers);
}

export { getModules, getModuleStatus }