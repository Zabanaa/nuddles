let clientId, clientSecret, accessToken
const Nuddles           = require('../index').Client

try{
    const credentials       = { clientId, clientSecret, accessToken } =  require('../config/credentials')
}
catch(e) {
    console.log("Config file not found. Using environment variables instead.")
    clientId            = process.env['CLIENT_ID']
    clientSecret        = process.env['CLIENT_SECRET']
    accessToken         = process.env['ACCESS_TOKEN']
}

let userlessClient      = new Nuddles({ clientId, clientSecret })
let authClient          = new Nuddles({ accessToken })

console.log(userlessClient)
console.log(authClient)

module.exports = { userlessClient, authClient }
