const Client    = require('./nuddles')
const utils     = require('../utils')

class Venue {

    constructor(client, venueId=utils.required("Missing venueId")) {
        this.client     = client
        this.venueId    = venueId
        this.rootPath   = `/venues/${this.venueId}`
    }

    getDetails() {
        return this.client.GET(this.rootPath)
    }

    getPhotos() {
        return this.client.GET(`${this.rootPath}/photos`)
    }

    getEvents() {
        return this.client.GET(`${this.rootPath}/events`)
    }

    getLikes() {
        return this.client.GET(`${this.rootPath}/likes`)
    }

    getNextVenues() {
        return this.client.GET(`${this.rootPath}/nextvenues`)
    }

    getOpeningHours() {
        return this.client.GET(`${this.rootPath}/hours`)
    }

    getThirdPartyLinks() {
        return this.client.GET(`${this.rootPath}/links`)
    }

    getMenu() {
        return this.client.GET(`${this.rootPath}/menu`)
    }

    getTips() {
        return this.client.GET(`${this.rootPath}/tips`)
    }

    getLists() {
        return this.client.GET(`${this.rootPath}/listed`)
    }

    getSpecialDetails(specialId) {
        let params = {venueId: this.venueId}
        return this.client.GET(`/specials/${specialId}`, params)
    }

}

module.exports = Venue
