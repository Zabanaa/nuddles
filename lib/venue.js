const utils     = require('../utils')

class Venue {

    constructor(client, venueId=utils.required("Missing venueId")) {
        this.client     = client
        this.venueId    = venueId
        this.rootPath   = `/venues/${this.venueId}`
    }

    getDetails() {
        // https://developer.foursquare.com/docs/venues/venues
        return this.client.GET(this.rootPath)
    }

    getPhotos() {
        // https://developer.foursquare.com/docs/venues/photos
        return this.client.GET(`${this.rootPath}/photos`)
    }

    getEvents() {
        // https://developer.foursquare.com/docs/venues/events
        return this.client.GET(`${this.rootPath}/events`)
    }

    getLikes() {
        // https://developer.foursquare.com/docs/venues/likes
        return this.client.GET(`${this.rootPath}/likes`)
    }

    getNextVenues() {
        // https://developer.foursquare.com/docs/venues/nextvenues
        return this.client.GET(`${this.rootPath}/nextvenues`)
    }

    getOpeningHours() {
        // https://developer.foursquare.com/docs/venues/hours
        return this.client.GET(`${this.rootPath}/hours`)
    }

    getThirdPartyLinks() {
        // https://developer.foursquare.com/docs/venues/links
        return this.client.GET(`${this.rootPath}/links`)
    }

    getMenu() {
        // https://developer.foursquare.com/docs/venues/menu
        return this.client.GET(`${this.rootPath}/menu`)
    }

    getTips() {
        // https://developer.foursquare.com/docs/venues/tips
        return this.client.GET(`${this.rootPath}/tips`)
    }

    getLists() {
        // https://developer.foursquare.com/docs/venues/listed
        return this.client.GET(`${this.rootPath}/listed`)
    }

    getSpecialDetails(specialId) {
        //
        let params = {venueId: this.venueId}
        return this.client.GET(`/specials/${specialId}`, params)
    }

}

module.exports = Venue
