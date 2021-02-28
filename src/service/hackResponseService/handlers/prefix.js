const prefix = async (response, prefixValue) => {
  response.write(prefixValue)
  response.write(' ')
}

export default prefix
