const Nuddles = require('./nuddles')

const Venue = function(credentials, venueId) {
    Nuddles.call(this, credentials)
    this.venueId = venueId
}

Venue.prototype = Object.create(Nuddles.prototype)
Venue.prototype.constructor = Venue

Venue.prototype.getDetails = function() {
    let path = '/venues/' + this.venueId
    return this.callApi(path)
}

Venue.prototype.getPhotos = function() {
    // return this.callApi
}

Venue.prototype.getEvents = function() {
    // return this.callApi
}

Venue.prototype.getLikes = function() {
    // return this.callApi
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
