const utils     = require('../utils')

class Venue {

    constructor(client, venueId=undefined) {
        this.client     = client
        this.venueId    = venueId
    }

    search(params={}) {
        // https://developer.foursquare.com/docs/venues/search
        return this.client.GET('/venues/search', params)
    }

    getCategories() {
        // https://developer.foursquare.com/docs/venues/categories
        return this.client.GET('/venues/categories')
    }

    getTrending(params={}) {
        // https://developer.foursquare.com/docs/venues/trending
        return this.client.GET('/venues/trending', params)
    }

    explore(params={}) {
        // https://developer.foursquare.com/docs/venues/explore
        return this.client.GET('/venues/explore', params)
    }

    getDetails(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/venues
        return this.client.GET(`/venues/${venueId}`)
    }

    getPhotos(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/photos
        return this.client.GET(`/venues/${venueId}/photos`)
    }

    getEvents(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/events
        return this.client.GET(`/venues/${venueId}/events`)
    }

    getLikes(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/likes
        return this.client.GET(`/venues/${venueId}/likes`)
    }

    getNextVenues(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/nextvenues
        return this.client.GET(`/venues/${venueId}/nextvenues`)
    }

    getOpeningHours(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/hours
        return this.client.GET(`/venues/${venueId}/hours`)
    }

    getThirdPartyLinks(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/links
        return this.client.GET(`/venues/${venueId}/links`)
    }

    getMenu(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/menu
        return this.client.GET(`/venues/${venueId}/menu`)
    }

    getTips(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/tips
        return this.client.GET(`/venues/${venueId}/tips`)
    }

    getLists(venueId=this.venueId) {
        // https://developer.foursquare.com/docs/venues/listed
        return this.client.GET(`/venues/${venueId}/listed`)
    }

    add(body){
        return this.client.POST(`/venues/add`, body)
    }

    herenow(params={}, venueId=this.venueId) {
        return this.client.GET(`/venues/${venueId}/herenow`, params)
    }

    like(venueId=this.venueId) {
        return this.client.POST(`/venues/${venueId}/like`)
    }

    dislike(venueId=this.venueId) {
        return this.client.POST(`/venues/${venueId}/dislike`)
    }

    flag(body, venueId=this.venueId) {
        return this.client.POST(`/venues/${venueId}/dislike`)
    }

    proposeEdit(body, venueId=this.venueId) {
        return this.client.POST(`/venues/${venueId}/proposeedit`, body)
    }
}

module.exports = Venue
