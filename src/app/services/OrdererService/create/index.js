const hubspot = require('../../../../config/hubspot')
const { hubspotConstants } = require('../../../constants')

const formatPropertyHubspot = require('../../../../helpers/formatPropertyHubspot')

const createOrderer = async () => {
  try {
    const response = await hubspot.deals.create({
      properties: [
        formatPropertyHubspot({ name: 'dealName', value: 'batata' }),
        formatPropertyHubspot({ name: 'dealStage', value: hubspotConstants.reviewOpix }),
        formatPropertyHubspot({ name: 'ordererNumber', value: 222 }),
        formatPropertyHubspot({ name: 'pipeline', value: 'default' }),
      ],
    })

    console.log(response.dealId)
    return response.dealId
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = createOrderer
