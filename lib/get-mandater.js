'use strict'

const axios = require('axios')
const config = require('../config.json')
const REDS = ['MDG', 'RØDT', 'A', 'SV', 'SP']

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(config.electionServiceUrl)
      const partier = response.data.partier
      const repacked = partier.map(parti => Object.assign({
        kode: parti.id.partikode,
        navn: parti.id.navn,
        mandater: parti.mandater.resultat ? parti.mandater.resultat.antall : parti.mandater.prognose.antall
      }))
      const score = repacked.reduce((a, b) => {
        if (REDS.includes(b.kode)) {
          a.red += b.mandater
        } else {
          a.blue += b.mandater
        }
        return a
      }, { red: 0, blue: 0 })
      resolve(score)
    } catch (error) {
      reject(error)
    }
  })
}
