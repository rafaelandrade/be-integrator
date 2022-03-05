const Hubspot = require('hubspot')
const { hubspotKey } = require('../keys')

const hubspot = new Hubspot({
  apiKey: hubspotKey
})

module.exports = hubspot
