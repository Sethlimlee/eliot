const env = process.env.NODE_ENV;

const prod = {
    app: {
        port: parseInt(process.env.PROD_PORT) || 3005
    }
};

const dev = {
    app: {
        port: parseInt(process.env.DEV_PORT) || 3005
    }
};

const test = {
    app: {
        port: parseInt(process.env.TEST_PORT) || 3005
    }
};

const config = {
    prod,
    dev,
    test
};

module.exports = config[env];