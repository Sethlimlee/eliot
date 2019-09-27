import axios from 'axios'
import { getStandardHeaders } from '../shared/auth'

function getScenes(cancel = { token: '' }) {
    const headers = { ...getStandardHeaders(), cancelToken: cancel.token };
    const url = `pld/api/v1/scenes`;
    return axios.get(url, headers);
}

export { getScenes }