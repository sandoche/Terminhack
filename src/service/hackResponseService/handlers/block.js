import config from '../../../config'
import sleep from '../../../utility/sleep'

const block = async (response, message) => {
  response.write(message)
  response.write(`
`)
  await sleep(config.defaultBreakAfterCommand)
}

export default block
