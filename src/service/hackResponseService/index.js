import config from '../../config'
import handlers from './handlers'

const handle = (response, hackData) => {
  const hackResponse = setUpHandlers(hackData)
  returnResponse(response, hackResponse)
}

const setUpHandlers = (hackResponse) => {
  const responseWithHandlers = hackResponse.map((item) => {
    item.handle = config.handlers.includes(item.type) ? handlers[item.type] : config.defaultHandler
    return item
  })
  return responseWithHandlers
}

const returnResponse = (response, hackResponse) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.setHeader('Transfer-Encoding', 'chunked')

  for (const command of hackResponse) {
    try {
      command.handle(response, command.value)
    } catch (e) {}
  }

  response.end()
}

export default {
  handle
}
