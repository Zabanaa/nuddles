const Nuddles   = require('./nuddles')
const utils     = require('./utils')

const Venue = function(nuddlesObject, venueId=helpers.required('venueId argument must be specified')) {
    Nuddles.call(this, nuddlesObject)
    this.venueId  = venueId
    this.rootPath = '/venues/' + this.venueId
}

Venue.prototype.callApi = Nuddles.prototype.callApi

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
    return this.callApi(this.rootPath + '/nextvenues')
}

Venue.prototype.getOpeningHours = function() {
    return this.callApi(this.rootPath + '/hours')
}

Venue.prototype.getThirdPartyLinks = function() {
    return this.callApi(this.rootPath + '/links')
}

Venue.prototype.getMenu = function() {
    return this.callApi(this.rootPath + "/menu")
}

Venue.prototype.getTips = function() {
    return this.callApi(this.rootPath + '/tips')
}

Venue.prototype.getLists = function() {
    return this.callApi(this.rootPath + '/listed')
}

Venue.prototype.getSpecialDetails = function(specialId) {
    let path    = '/specials/' + specialId
    let params  = {venueId: this.venueId}
    return this.callApi(path, params)
}

module.exports = Venue
