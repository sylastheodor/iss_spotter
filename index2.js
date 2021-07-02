const request = require('request-promise-native')
const { nextISSTimesForMyLocation } = require('./iss_promised.js')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes)
  })
