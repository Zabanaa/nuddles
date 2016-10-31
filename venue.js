const Nuddles = require('./nuddles')

const Venue = function(credentials, venueId) {
    Nuddles.call(this, credentials)
    this.venueId  = venueId
    this.rootPath = '/venues/' + this.venueId
}

Venue.prototype = Object.create(Nuddles.prototype)
Venue.prototype.constructor = Venue

Venue.prototype.getDetails = function() {
    return this.callApi(this.rootPath)
}

Venue.prototype.getPhotos = function() {
    return this.callApi(this.rootPath + '/photos')
}

Venue.prototype.getEvents = function() {
    return this.callApi(this.rootPath + '/events')
}

Venue.prototype.getLikes = function() {
    return this.callApi(this.rootPath + '/likes')
}

Venue.prototype.getNextVenues = function() {
    // return this.callApi
}

Venue.prototype.getOpeningHours = function() {
    // return this.callApi
}

Venue.prototype.getThirdPartyLinks = function() {
    // return this.callApi
}

Venue.prototype.getMenu = function() {
    // return this.callApi
}

Venue.prototype.getTips = function() {
    // return this.callApi
}

Venue.prototype.getLists = function() {
    // return this.callApi
}

module.exports = Venue
