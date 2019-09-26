import axios from 'axios'
import { getStandardHeaders } from '../utils/auth'

function getPlants(cancel) {
    const headers = { ...getStandardHeaders(), cancelToken: cancel.token };
    const url = `/servicecatalog/api/v2.0/plants`;
    return axios.get(url, headers);
}

function deletePlant(id, cancel) {
    const headers = { ...getStandardHeaders(), cancelToken: cancel.token };
    const url = `servicecatalog/api/v2.0/plants/${id}`;
    return axios.delete(url, headers).then(getPlants);
}

export { getPlants, deletePlant }