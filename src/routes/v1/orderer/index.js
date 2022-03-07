// @ts-ignore
const router = require('express-promise-router')()
const { ordererController } = require('../../../app/controllers')

router.post('/create', ordererController.createOrUpdate)

module.exports = router
