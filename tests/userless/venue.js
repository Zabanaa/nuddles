const chai          = require('chai')
const assert        = chai.assert
const Venue         = require('../../index').Venue
let client          = require('../config').userlessClient

const venue         = new Venue(client, "40a55d80f964a52020f31ee3")

describe('Test Venue.searchVenues', () => {

    it('searches venues and returns results based on location',() => {

        let params          = {'near': 'Paris, France'}
        let searchVenues    =  venue.search(params)
        return searchVenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venues')
            assert.isArray(response.venues)
            assert.include(response.geocode.where, 'paris france')
        })
    })
})

describe('Test Nuddles.exploreVenues', () => {

    it('returns one or more groups of recommendations', () => {

        let params          = {near: 'Paris, France', limit: 3, radius: 1700}
        let recommendations = venue.explore(params)

        return recommendations.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.equal(params.near, response.geocode.displayString)
        })
    })

    it('returns a 400 if no location attribute is passed', () => {

        let params          = {limit: 3}
        let recommendations = venue.explore(params)

        return recommendations.catch( (errorMsg) => {
            assert.include(errorMsg, 400)
            assert.include(errorMsg,'Must provide parameters (ll and radius) or (sw and ne) or (near and radius) or (nearVenueId and ll) or (superVenueId) or (polygon)')

        })

    })

})

describe(' Test Nuddles.getVenueCategories', (done) => {

    it('returns a list of all categories', () => {
        let venueCategories = venue.getCategories()
        return venueCategories.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'categories')
            assert.isArray(response.categories)
            assert.isAtLeast(response.categories.length, 1)
        })
    })

})

describe('Test Nuddles.getTrendingVenues', () => {

    it('returns a list of trending venues', () => {

        let queryParams          = {near: 'Paris, France', limit: 3, radius: 2000}
        let trendingVenues       = venue.getTrending(queryParams)

        return trendingVenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venues')
            assert.isArray(response.venues)
            assert.include(response.geocode.where, 'paris france')
        })
    })

    it('returns a 400 if no location parameter is passed', () => {

        let queryParams          = {limit: 3, radius: 1700}
        let trendingVenues       = venue.getTrending(queryParams)

        return trendingVenues.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter ll or userll or near')
        })
    })
})

describe('Test Venue.getDetails()', () => {

    it('will return details about a venue based on id', () => {

        let venueDetails = venue.getDetails()

        return venueDetails.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venue')
            assert.equal(venue.venueId, response.venue.id)
        })
    })

    it('will return a 400 bad request when given an invalid id', () => {

        const someRandomVenue = new Venue(client, "someid")
        let venueDetails = someRandomVenue.getDetails()
        return venueDetails.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, `Value ${someRandomVenue.venueId} is invalid for venue id`)
        })
    })
})

describe('Test Venue.getPhotos', () => {

    it('returns a list of photos', () => {

        let photosList = venue.getPhotos()
        return photosList.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'photos')
        })
    })
})

describe('Test Venue.getEvents', () => {

    it('returns a list of events for that venue', () => {

        let photosList = venue.getEvents()
        return photosList.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'events')
        })
    })
})

describe('Test Venue.getLikes', () => {

    it('returns the number of likes for that venue', () => {

        let likes = venue.getLikes()
        return likes.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'likes')
        })
    })
})

describe('Test Venue.getNextVenues', () => {

    it('returns a list of the most visited venues after this one', () => {

        let nextVenues = venue.getNextVenues()
        return nextVenues.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'nextVenues')
        })
    })
})

describe('Test Venue.getOpeningHours', () => {

    it('returns opening hours for a venue', () => {

        let openingHours = venue.getOpeningHours()
        return openingHours.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'hours')
            assert.property(data.response, 'popular')
        })
    })
})

describe('Test Venue.getThirdPartyLinks', () => {

    it('returns third party links for a venue', () => {

        let links = venue.getThirdPartyLinks()
        return links.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'links')
        })
    })
})

describe('Test Venue.getMenu', () => {

    it('returns a menu for a venue', () => {

        let menu = venue.getMenu()
        return menu.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'menu')
        })
    })
})

describe('Test Venue.getTips', () => {

    it('returns tips for a venue', () => {
        let tips = venue.getTips()
        return tips.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'tips')
        })
    })
})

describe('Test Venue.getLists', () => {

    it('returns a list of lists the venue is part of', () => {
        let lists = venue.getLists()
        return lists.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'lists')
        })
    })
})
