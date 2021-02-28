import express from 'express'
import config from '../config'
import hacks from '../hacks'
import hackDataParsingService from '../service/hackDataParsingService'
import hackResponseService from '../service/hackResponseService'

const router = express.Router()

router.get('/', function (req, res, next) {
  const hackId = req.params.hack || config.defaultHackId
  const targetHost = req.params.target || config.defaultTargetHost
  const hackFile = hacks.get(hackId) || hacks.get(config.defaultHackId)

  const responseData = hackDataParsingService.parse(hackFile, targetHost)
  hackResponseService.handle(res, responseData)
})

module.exports = router
