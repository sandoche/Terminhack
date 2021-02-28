const hacksMap = new Map([
  ['hack', 'hack.yml']
])

const handlers = [
  'char', 'line', 'block', 'linebreak', 'pause'
]

const config = {
  defaultTargetHost: 'www.sandoche.com',
  defaultHackId: 'hack',
  hacksMap,
  handlers,
  defaultHandler: 'block'
}

export default config
