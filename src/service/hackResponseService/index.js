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

  // for (const command of hackResponse) {
  //   command.handle(response, hackResponse.value)
  // }
}

/*

  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.setHeader('Transfer-Encoding', 'chunked')
  response.write('Thinking...')
  sendAndSleep(response, 1)

const sendAndSleep = function (response, counter) {
  if (counter > 10) {
    response.end()
  } else {
    response.write(';i=' + counter)
    counter++
    setTimeout(function () {
      sendAndSleep(response, counter)
    }, 1000)
  }
}
*/

export default {
  handle
}
