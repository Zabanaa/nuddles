try {
     module.exports.creds = {clientId, clientSecret} = require('../config/credentials')
}
catch (e){
    console.log("No credentials file found. Using environment variables instead.")

    module.exports.creds = {
        clientId: process.env['CLIENT_ID'],
        clientSecret: process.env['CLIENT_SECRET']
    }
    console.log(module.exports.creds)
}
