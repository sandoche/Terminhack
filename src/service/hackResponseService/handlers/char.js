import sleep from '../../../utility/sleep'

const char = async (response, message) => {
  response.write(message)
  await sleep(1000)
}

export default char
