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

    if (queryParams) {
        helpers.checkIsObject(queryParams)
    }

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

Nuddles.prototype.searchVenues = function(params) {
    return this.callApi('/venues/search', params)
}

Nuddles.prototype.suggestCompletion = function(params) {
    return this.callApi('/venues/suggestCompletion', params)
}

Nuddles.prototype.getVenueDetail = function(venueId) {
    let path = '/venues/' + venueId
    return this.callApi(path)
}

Nuddles.prototype.getVenueCategories = function() {
    return this.callApi('/venues/categories')
}

Nuddles.prototype.getTrendingVenues = function(params) {
    return this.callApi('/venues/trending', params)
}

Nuddles.prototype.exploreVenues = function(params) {
    return this.callApi('/venues/explore', params)
}

module.exports = Nuddles

