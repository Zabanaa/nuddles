const utils         = require('../utils')
const root          = "https://api.foursquare.com/v2"
const encoding      = undefined

class Nuddles {

    constructor(config) {
        utils.validateConfig(config)
        this.clientId       = config.clientId
        this.clientSecret   = config.clientSecret
        this.apiVersion     = config.apiVersion || "20161206"
    }

    get creds() {
        return `v=${this.apiVersion}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    }

    GET(path, params={}) {

        const queryString   = utils.serialise(params)
        const url           = `${root}${path}?${queryString}&${this.creds}`
        const method        = 'GET'
        const options       = { url, method, encoding }

        return utils.makeRequest(options)
    }

    searchVenues(params={}) {
        return this.GET('/venues/search', params)
    }

    suggestCompletion(params={}) {
        return this.GET('/venues/suggestCompletion', params)
    }

    getVenueDetail(venueId) {
        return this.GET(`/venues/${venueId}`)
    }

    getVenueCategories() {
        return this.GET('/venues/categories')
    }

    getTrendingVenues(params={}) {
        return this.GET('/venues/trending', params)
    }

    exploreVenues(params={}) {
        return this.GET('/venues/explore', params)
    }

    searchSpecials(params={}) {
        return this.GET('/specials/search', params)
    }

    searchEvents(params={}) {
        return this.GET('/events/search', params)
    }

    getEventCategories() {
        return this.GET('/events/categories')
    }

    getCheckinLikes(checkinId) {
        return this.GET(`/checkins/${checkinId}/likes`)
    }

    getTipLikes(tipId) {
        return this.GET(`/tips/${tipId}/likes`)
    }

    getTipSaves(tipId) {
        return this.GET(`/tips/${tipId}/saves`)
    }

    getTipLists(tipId) {
        return this.GET(`/tips/${tipId}/listed`)
    }

}

module.exports = Nuddles
