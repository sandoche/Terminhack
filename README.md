# Terminhack

[![License][license-src]][license-href]
[![Medium Badge](https://badgen.net/badge/icon/medium?icon=medium&label)](https://medium.com/@sandoche)
[![Twitter: sandochee](https://img.shields.io/twitter/follow/sandochee.svg?style=social)](https://twitter.com/sandochee)

👨‍💻 Impress your friends pretending to be a real hacker (works directly from the terminal)

Unlike many websites like Geektyper or Hackertyper, Terminhack shows real hacking tools in action and their possible outcome following a real penetration testing process. It can be used through the website or direcly from the terminal!

I made this little website for fun, while doing my learning month about penetration testing.

### 👉 [Read more](https://medium.com/learning-lab/getting-started-with-ethical-hacking-1aa6401355fa)

<hr>
_This software is made for educational & fun purpose only. Even though it shows real penetration tools in action, it does not perform any of these actions. Running any of these commands in real condition or performing hack attempt against a target without their explicit permission is illegal._
<hr>


## 📖 How to use

### From the browser
Go to https://terminhack.learn.uno and click on the "Run this command from my browser"

### From the terminal
```sh
curl https://terminhack.herokuapp.com/hack/sandoche.com -N
# you can replace sandoche.com by any domain name or IP address to prentend hacking a specific target
```

## ⚙️ Create your own script

### Run the dev server
```sh
# install the project
npm install

# run the dev server
npm run dev
```

### Add a script
1. Go to the `src/data` folder
2. You will find the default script `hack.yml`
3. Duplicate it and rename it
4. Edit `src/config` add another array like this `['hack-id', 'filename.yml']` to the `hacksMap` `Map` constructor replace `hack-id` by the id you want to give to your script and `filename.yml` by the name you decided on the previous step
5. Edit your yaml file you will see a structure like this
```yaml
- type: (char | line | block | linebreak | pause)
  value: host $target
  prefix: default

## Type
# - char: shows your message character after character
# - line: shows your message line after line
# - block: shows your message in one block
# - linebreak: to create a line break in the result
# - pause: will pause the script for the amount of time defined in value

## Value
# Here goes your message or the time of your pauses
# Note that $target will be replaced by the <target> in the url

## Prefix
# Setting a prefix to default will display root@kali:~$ before the message
# You can also put the value of your prefix to replace root@kali:~$
# Or disable it by not specifying prefix
```
6. Test your script by running  `curl http://localhost:3000/<hack-id>/<target> -N` or by opening this url in your browser `http://localhost:3000/<hack-id>/<target>`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## ⭐️ Show your support

Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/sandoche">[![patreon.png](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/sandoche)</a>

## 🍺 Buy me a beer

If you like this project, feel free to donate:

- PayPal: https://www.paypal.me/kanbanote
- Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
- Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
- Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
- Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)

## 📄 License

[MIT License](./LICENSE)

Copyright (c) Sandoche Adittane

<!-- Badges -->

[license-src]: https://img.shields.io/npm/l/darkmode-js.svg
[license-href]: ./LICENSE
