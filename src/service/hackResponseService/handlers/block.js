import sleep from '../../../utility/sleep'

const block = async (response, message) => {
  response.write(message)
  response.write(`
`)
  sleep(1000)
}

export default block
