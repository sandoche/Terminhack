import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'

const parse = (hackFile, targetHost) => {
  const hackDataRaw = importData(hackFile)
  const hackDataWithContent = replaceTargetHost(hackDataRaw, targetHost)

  return hackDataWithContent
}

const importData = (hackFile) => {
  const data = yaml.load(fs.readFileSync(path.resolve(__dirname, '../../data/' + hackFile), 'utf8'))
  return data
}

const replaceTargetHost = (data, targetHost) => {
  const dataWithContent = data.map((item) => {
    try {
      item.value = item.value.replace(/\$target/g, targetHost)
    } catch (e) {}

    return item
  })

  return dataWithContent
}

export default {
  parse
}
