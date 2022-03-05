const hubspot = require('../../../../config/hubspot')
const { hubspotConstants } = require('../../../constants')

const formatPropertyHubspot = require('../../../../helpers/formatPropertyHubspot')

const createOrderer = async () => {
  try {
    const response = await hubspot.deals.create({
      properties: [
        { name: 'dealname', value: 'batata' },
        { name: 'dealstage', value: hubspotConstants.reviewOpix },
        { name: 'numero_do_pedido', value: 222 },
        { name: 'pipeline', value: 'default' },
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
