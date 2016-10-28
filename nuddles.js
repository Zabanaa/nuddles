const xhr     = require('xhr')
const helpers = require('./helpers')

const Nuddles = function(credentials) {

    helpers.checkIsObject(credentials)

    if (!credentials.clientId || !credentials.clientSecret)
        throw new Error("Missing required fields. Please refer to the documentation.")

    this.clientId       = credentials.clientId
    this.clientSecret   = credentials.clientSecret
}

Nuddles.prototype.callApi = function (path, queryParams) {

    const root = "https://api.foursquare.com/v2"
    const queryString = helpers.urlSerialise(queryParams)

    let options = {
        'url': root + path + "?" + queryString + "&client_id=" + this.clientId + "&client_secret=" + this.clientSecret,
        'method': 'GET',
        'encoding': undefined,
        'headers': {
            'Content-Type': 'application/json'
        }
    }
    return helpers.makeRequest(options)
}

module.exports = Nuddles

