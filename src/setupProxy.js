const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/servicecatalog/', { target: 'https://eliot.azure-api.net', changeOrigin: true, }))
    app.use(proxy('/devicemanagement/', { target: 'https://eliot.azure-api.net', changeOrigin: true, }))
}