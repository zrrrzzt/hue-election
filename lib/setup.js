'use strict'

const Hue = require('philips-hue')
const hue = new Hue()

hue.getBridges()
  .then(bridges => {
    const bridge = bridges[0]
    console.log('bridge found')
    console.log(bridge)
    return hue.auth(bridge)
  })
  .then(username => {
    console.log(`username: ${username}`)
  })
  .catch(error => {
    console.error(error.stack || error)
  })
