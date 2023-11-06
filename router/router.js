const { createRequest } = require('../models/vacation-model/vacation-model')

const Router = require('express').Router
const router = new Router()

router.post('/vacation',createRequest)

module.exports = router