const plantsAPI = require('./pants')
const modulesAPI = require('./modules')
const commandsAPI = require('./commands')
const express = require('express')
const router = express.Router()

router.use('/api', plantsAPI);
router.use('/api', modulesAPI);
router.use('/api', commandsAPI);

module.exports = router;