'use strict'

const Hue = require('philips-hue')
const config = require('../config.json')
const hue = new Hue()

module.exports = color => {
  return new Promise(async (resolve, reject) => {
    hue.bridge = config.bridge
    hue.username = config.username
    const light = hue.light(config.light)
    const options = config.colors[color]
    try {
      const result = await light.setState(options)
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}
