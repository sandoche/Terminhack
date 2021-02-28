import config from '../../../config'
import sleep from '../../../utility/sleep'

const char = async (response, message) => {
  for (const char of message) {
    response.write(char)
    await sleep(Math.floor(Math.random() * config.typingInterval) + 50)
  }
  response.write(`
`)
  await sleep(config.defaultBreakAfterCommand)
}

export default char
