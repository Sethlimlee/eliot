import axios from 'axios'
import { getStandardHeaders } from '../utils/auth'

function getModules(id) {
    const headers = { ...getStandardHeaders() };
    const url = `/servicecatalog/api/v2.0/plants/${id}/modules`;
    return axios.get(url, headers);
}

function getModuleStatus(id) {
    const headers = { ...getStandardHeaders() };
    const url = `/devicemanagement/api/v2.0/modules/${id}/commands/getState`;
    const body = {
        "timeout" : 20,
        "command" : {
          "correlationID" : "ExampleCorrelationID124"
        }
    }

    return axios.post(url, body, headers);
}

export { getModules, getModuleStatus }