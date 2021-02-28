const handle = (response, hackResponse) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.setHeader('Transfer-Encoding', 'chunked')
  response.write('Thinking...')
  sendAndSleep(response, 1)
}

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

export default {
  handle
}
