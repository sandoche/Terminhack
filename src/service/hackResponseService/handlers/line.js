import config from '../../../config'
import sleep from '../../../utility/sleep'

const line = async (response, message) => {
  response.write(message)
  sleep(config.defaultBreakAfterCommand)
}

export default line
