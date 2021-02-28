const hacksMap = new Map([
  ['hack', 'hack.yml']
])

const config = {
  defaultTargetHost: 'www.sandoche.com',
  defaultHackId: 'hack',
  hacksMap,
  defaultHandler: 'block',
  typingInterval: 200,
  defaultBreakAfterCommand: 1000
}

export default config
