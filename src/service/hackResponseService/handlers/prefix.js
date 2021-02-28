import config from '../../../config'

const prefix = async (response) => {
  response.write(config.userPrefix)
  response.write(' ')
}

export default prefix
