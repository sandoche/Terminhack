import config from '../../../config'
import sleep from '../../../utility/sleep'

const line = async (response, message) => {
  const lines = message.split(/\r\n|\r|\n/)
  for (const line of lines) {
    response.write(line)
    response.write(`
`)
    await sleep(Math.floor(Math.random() * config.typingInterval) + 50)
  }
  sleep(config.defaultBreakAfterCommand)
}

export default line
