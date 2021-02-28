import express from 'express'
import config from '../config'
import hackDataParsingService from '../service/hackDataParsingService'
import hackResponseService from '../service/hackResponseService'

const router = express.Router()

router.get('/:hack?/:target?', function (req, res, next) {
  const hackId = req.params.hack || config.defaultHackId
  const targetHost = req.params.target || config.defaultTargetHost
  const hacks = config.hacksMap
  const hackFile = hacks.get(hackId) || hacks.get(config.defaultHackId)

  const hackData = hackDataParsingService.parse(hackFile, targetHost)
  hackResponseService.handle(res, hackData)
})

module.exports = router
