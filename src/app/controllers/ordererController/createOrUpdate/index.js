const { BodyPropertyError } = require('errors-stack')
const { create } = require('../../../services/OrdererService')

const createOrderer = async (req, res) => {
  try {
    const { ordererId, email } = req.body

    if (!email) throw BodyPropertyError(`Could not find any email data.`)

    const response = await create()
    return res.status(200).json({ Error: false, response })
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = createOrderer
