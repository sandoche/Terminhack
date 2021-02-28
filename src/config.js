const hacksMap = new Map([
  ['hack', 'hack.yml']
])

const config = {
  defaultTargetHost: 'www.sandoche.com',
  defaultHackId: 'hack',
  hacksMap,
  defaultHandler: 'block',
  typingInterval: 70,
  defaultBreakAfterCommand: 1000,
  userPrefix: 'root@kali:~$'
}

export default config
