const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const hackController = require('./controller/hackController')
const versionController = require('./controller/versionController')

const app = express()

const corsOptions = {
  origin: 'https://terminhack.learn.uno',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/version', versionController)
app.use('/', hackController)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // send error message
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
