import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Transfer-Encoding', 'chunked')
  res.write('Thinking...')
  sendAndSleep(res, 1)
})

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

export default router
