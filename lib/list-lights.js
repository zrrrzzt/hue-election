'use strict'

const Hue = require('philips-hue')
const config = require('../config.json')
const hue = new Hue()

hue.bridge = config.bridge
hue.username = config.username

hue.getLights()
  .then(lights => {
    console.log(lights)
  })
  .catch(error => {
    console.error(error.stack || error)
  })
