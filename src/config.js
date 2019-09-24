import dotenv from 'dotenv'
dotenv.config();

const env = process.env.REACT_APP_ENV;
const prod = {
    app: {
        baseUrl: 'https://eliot.azure-api.net',
        port: parseInt(process.env.PROD_PORT) || 3000
    }
};

const dev = {
    app: {
        baseUrl: 'https://eliot.azure-api.net',
        port: parseInt(process.env.DEV_PORT) || 3000
    }
};

const test = {
    app: {
        baseUrl: 'https://eliot.azure-api.net',
        port: parseInt(process.env.TEST_PORT) || 3000
    }
};

const config = {
    prod,
    dev,
    test
};

export default config[env];