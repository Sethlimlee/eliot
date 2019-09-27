import axios from 'axios'
import { getStandardHeaders } from '../shared/auth'

function getPlants(cancel = { token: '' }) {
    const headers = { ...getStandardHeaders(), cancelToken: cancel.token };
    const url = `/servicecatalog/api/v2.0/plants`;
    return axios.get(url, headers);
}

function deletePlant(id, cancel = { token: '' }) {
    const headers = { ...getStandardHeaders(), cancelToken: cancel.token };
    const url = `servicecatalog/api/v2.0/plants/${id}`;
    return axios.delete(url, headers).then(getPlants);
}

export { getPlants, deletePlant }