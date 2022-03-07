const { hubspotFieldsConstants } = require('../app/constants')

const formatPropertyHubspot = ({ name, value }) => {
    return {
        name: hubspotFieldsConstants[name],
        value
    }
}

module.exports = formatPropertyHubspot
