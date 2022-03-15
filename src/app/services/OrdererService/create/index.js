const hubspot = require('../../../../config/hubspot')
const { hubspotConstants } = require('../../../constants')

const formatPropertyHubspot = require('../../../../helpers/formatPropertyHubspot')

const createOrderer = async (email) => {
  try {
    const orderNumber = 1

    const response = await hubspot.deals.create({
      properties: [
        formatPropertyHubspot({ name: 'dealName', value: `Novo pedido: Nro ${orderNumber}` }),
        formatPropertyHubspot({ name: 'dealStage', value: hubspotConstants.reviewOpix }),
        formatPropertyHubspot({ name: 'ordererNumber', value: 222 }),
        formatPropertyHubspot({ name: 'pipeline', value: 'default' }),
      ],
    })

    return response.dealId
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = createOrderer
