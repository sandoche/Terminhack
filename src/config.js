const hacksMap = new Map([
  ['hack', 'hack.yml']
])

const config = {
  defaultTargetHost: 'www.sandoche.com',
  defaultHackId: 'hack',
  hacksMap,
  defaultHandler: 'block',
  typingInterval: 200
}

export default config
