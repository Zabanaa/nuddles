const Nuddles           = require('../index').Client
const credentials       = { clientId, clientSecret, accessToken } =  require('../config/credentials')
const userlessClient    = new Nuddles({ clientId, clientSecret })
const authClient        = new Nuddles({ accessToken })

module.exports = { userlessClient, authClient }
