'use strict'

const config = require('./config.json')
const setColor = require('./lib/set-color')
const getMandater = require('./lib/get-mandater')

const switchColor = async color => {
  try {
    await setColor(color)
    console.log(`Light switched to ${color}`)
  } catch (error) {
    console.error(error)
  }
}

const getColor = async () => {
  try {
    const mandater = await getMandater()
    console.log(mandater)
    return mandater.red > mandater.blue ? 'red' : 'blue'
  } catch (error) {
    console.error(error)
    return 'white'
  }
}

const setLight = async () => {
  try {
    const color = await getColor()
    switchColor(color)
  } catch (error) {
    console.error(error)
  }
}

setLight()

setInterval(() => setLight(), 1000 * 60 * config.pollIntervalMinutes)
