const utils = require('./utils')

const Client = function(config) {

    utils.checkIsObject(config)

    if (!config.clientId || !config.clientSecret)
        throw new Error("Missing required fields. Please refer to the documentation.")

    this.clientId       = config.clientId
    this.clientSecret   = config.clientSecret
    this.apiVersion     = config.apiVersion || "20161026"
}

Client.prototype.callApi = function (path, queryParams) {

    const root = "https://api.foursquare.com/v2"
    const queryString = utils.urlSerialise(queryParams)

    if (queryParams) {
        utils.checkIsObject(queryParams)
    }

    let options = {
        'url': `${root}${path}?v=${this.apiVersion}&${queryString}&client_id=${this.clientId}&client_secret=${this.clientSecret}`,
        'method': 'GET',
        'encoding': undefined,
        'headers': {
            'Content-Type': 'application/json'
        }
    }

    return utils.makeRequest(options)
}

Client.prototype.searchVenues = function(params) {
    return this.callApi('/venues/search', params)
}

Client.prototype.suggestCompletion = function(params) {
    return this.callApi('/venues/suggestCompletion', params)
}

Client.prototype.getVenueDetail = function(venueId) {
    let path = '/venues/' + venueId
    return this.callApi(path)
}

Client.prototype.getVenueCategories = function() {
    return this.callApi('/venues/categories')
}

Client.prototype.getTrendingVenues = function(params) {
    return this.callApi('/venues/trending', params)
}

Client.prototype.exploreVenues = function(params) {
    return this.callApi('/venues/explore', params)
}

Client.prototype.searchSpecials = function(params) {
    return this.callApi('/specials/search', params)
}

Client.prototype.searchEvents = function(params) {
    return this.callApi('/events/search', params)
}

Client.prototype.getEventCategories = function() {
    return this.callApi('/events/categories')
}


module.exports = Client

