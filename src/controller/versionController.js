import express from 'express'
const router = express.Router()

router.get('/', function (req, res, next) {
  const pjson = require('../../package.json') // eslint-disable-line

  res.setHeader('Content-Type', 'application/json')
  res.json({ running: true, ping: 'pong', version: pjson.version, author: 'Sandoche Adittane' })
})

module.exports = router
