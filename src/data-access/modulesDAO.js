import axios from 'axios'
import { getStandardHeaders } from '../utils/auth'

function getModules(id) {
    const headers = { ...getStandardHeaders() };
    const url = `/servicecatalog/api/v2.0/plants/${id}/modules`;
    return axios.get(url, headers);
}

export { getModules }