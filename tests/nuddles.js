const chai          = require('chai')
const assert        = chai.assert
const Nuddles       = require('../nuddles')
const credentials   = require('../credentials')

const nuddles       = new Nuddles({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret
})

describe('Test Nuddles.searchVenues', (done) => {

    it('searches venues and returns results based on location',() => {

        let params          = {'near': 'Paris, France'}
        let searchVenues    = nuddles.searchVenues(params)
        return searchVenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venues')
            assert.isArray(response.venues)
            assert.include(response.geocode.where, 'paris france')
        })

    })

})

describe('Test Nuddles.getVenueDetail', (done) => {

    it('returns all the details for a specific venue given an ID', () => {
        let venueId      = '4adcda0af964a520623421e3'
        let venueDetails = nuddles.getVenueDetail(venueId)

        return venueDetails.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venue')
            assert.isObject(response.venue, "venue is indeed of type object")
        })
    })

    it('returns a 400 if the provided venueID is invalid', () => {
        let venueId = "invalididbruv"
        let venueDetails = nuddles.getVenueDetail(venueId)
        return venueDetails.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, venueId + ' is invalid for venue id')
        })
    })

})

describe(' Test Nuddles.getVenueCategories', (done) => {

    it('returns a list of all categories', () => {
        let venueCategories = nuddles.getVenueCategories()
        return venueCategories.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'categories')
            assert.isArray(response.categories)
            assert.isAtLeast(response.categories.length, 1)
        })
    })

})

describe('Test Nuddles.getTrendingVenues', (done) => {

    it('returns a list of trending venues', () => {

        let params          = {near: 'Paris, France', limit: 3, radius: 2000}
        let trendingVenues  = nuddles.getTrendingVenues(params)
        return trendingVenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venues')
            assert.isArray(response.venues)
            assert.include(response.geocode.where, 'paris france')
        })
    })

    it('returns a 400 if no location parameter is passed', () => {

        let params          = {limit: 3, radius: 1700}
        let trendingVenues  = nuddles.getTrendingVenues(params)

        return trendingVenues.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter ll or userll or near')
        })
    })
})

describe('Test Nuddles.exploreVenues', () => {

    it('returns one or more groups of recommendations', () => {

        let params          = {near: 'Paris, France', limit: 3, radius: 1700}
        let recommendations = nuddles.exploreVenues(params)

        return recommendations.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.equal(params.near, response.geocode.displayString)
        })
    })

    it('returns a 400 if no location attribute is passed', () => {

        let params          = {limit: 3}
        let recommendations = nuddles.exploreVenues(params)

        return recommendations.catch( (errorMsg) => {
            assert.include(errorMsg, 400)
            assert.include(errorMsg,'Must provide parameters (ll and radius) or (sw and ne) or (near and radius) or (nearVenueId and ll) or (superVenueId) or (polygon)')

        })

    })

})

describe('Test Nuddles.suggestCompletion', () => {

    let params      = {near: 'Paris, France', query: 'Pizz'}

    it('Returns a list of mini venues based on a search query', () => {

        let minivenues  = nuddles.suggestCompletion(params)

        return minivenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'minivenues')
            assert.isArray(response.minivenues)
        })
    })

    it('Returns a 400 when missing query or location parameters', () => {
        delete params.query

        let minivenues = nuddles.suggestCompletion(params)

        return minivenues.catch( (errorMsg) => {

            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter query')
        })
    })

    it('Returns an empty array when passed an unknown query parameter', () => {

        params.query = "whfwhfw"
        let minivenues = nuddles.suggestCompletion(params)
        return minivenues.then( (data) => {
            let response = data.response
            assert.equal(0, response.minivenues.length)
        })
    })
})

describe('Test Nuddles.searchSpecials', () => {

    it('returns a list of specials', () => {
        let params   = { ll: '48.8676606,2.3498557' }
        let specials = nuddles.searchSpecials(params)

        return specials.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'specials')
        })
    })

    it('returns a 400 bad request if no ll param is passed', () => {

        let specials = nuddles.searchSpecials()
        return specials.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter ll')
        })
    })
})

describe('Test Nuddles.searchEvents', () => {


    it('returns a list of events matching the search params', () => {
        let params   = {domain: 'songkick.com', eventId: '8183976'}
        let events = nuddles.searchEvents(params)

        return events.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'events')
        })
    })

    it('returns a 400 bad request if no domain is passed', () => {
        let params   = {eventId: '8183976'}
        let events = nuddles.searchEvents(params)
        return events.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter domain')
        })
    })

    it('returns a 400 bad request if no eventId is passed', () => {
        let params   = {domain: 'songkick.com'}
        let events = nuddles.searchEvents(params)
        return events.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must specify eventId or participantId')
        })
    })

})
