let clientId, clientSecret, accessToken
const Nuddles           = require('../index').Client

try{
    const credentials                   = { clientId, clientSecret, accessToken } =  require('../config/credentials')
    module.exports.userlessClient       = new Nuddles({ clientId, clientSecret })
    module.exports.authClient           = new Nuddles({ accessToken })

}
catch(e) {
    console.log("Config file not found. Using environment variables instead.")
    clientId            = process.env['CLIENT_ID']
    clientSecret        = process.env['CLIENT_SECRET']
    accessToken         = process.env['ACCESS_TOKEN']
    module.exports.userlessClient = new Nuddles({ clientId, clientSecret })
    module.exports.authClient     = new Nuddles({ clientId, clientSecret })
}
