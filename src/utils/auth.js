import config from './config'
import dotenv from 'dotenv'

dotenv.config();
const { app: { baseUrl } } = config

function getToken() {
    return getCookie('token');
}

function getStandardHeaders() {
    return ({
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.REACT_APP_SUB_KEY,
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }
    })
}

function getBaseUrl() {
    return baseUrl;
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export { getToken, getStandardHeaders, getBaseUrl, getCookie }