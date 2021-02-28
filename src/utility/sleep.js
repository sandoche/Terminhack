const sleep = async (duration) => {
  return await new Promise(resolve => setTimeout(resolve, duration))
}

export default sleep
