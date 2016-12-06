const chai          = require('chai')
const assert        = chai.assert
const nuddles       = require('../index')
const Nuddles       = nuddles.Nuddles
const Venue         = require('../lib/venue')
const credentials   = { clientId, clientSecret } = require('../config/credentials')

let client = new Nuddles({ clientId, clientSecret })

const clintonBaking = new nuddles.Venue(client, "40a55d80f964a52020f31ee3")

describe('Test Venue.getDetails()', () => {

    it('will return details about a venue based on id', () => {

        let venueDetails = clintonBaking.getDetails()

        return venueDetails.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venue')
            assert.equal(clintonBaking.venueId, response.venue.id)
        })
    })

    it('will return a 400 bad request when given an invalid id', () => {

        const someRandomVenue = new nuddles.Venue(client, "someid")
        let venueDetails = someRandomVenue.getDetails()
        return venueDetails.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, `Value ${someRandomVenue.venueId} is invalid for venue id`)
        })
    })
})

describe('Test Venue.getPhotos', () => {

    it('returns a list of photos', () => {

        let photosList = clintonBaking.getPhotos()
        return photosList.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'photos')
        })
    })
})

describe('Test Venue.getEvents', () => {

    it('returns a list of events for that venue', () => {

        let photosList = clintonBaking.getEvents()
        return photosList.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'events')
        })
    })
})

describe('Test Venue.getLikes', () => {

    it('returns the number of likes for that venue', () => {

        let likes = clintonBaking.getLikes()
        return likes.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'likes')
        })
    })
})

describe('Test Venue.getNextVenues', () => {

    it('returns a list of the most visited venues after this one', () => {

        let nextVenues = clintonBaking.getNextVenues()
        return nextVenues.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'nextVenues')
        })
    })
})

describe('Test Venue.getOpeningHours', () => {

    it('returns opening hours for a venue', () => {

        let openingHours = clintonBaking.getOpeningHours()
        return openingHours.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'hours')
            assert.property(data.response, 'popular')
        })
    })
})

describe('Test Venue.getThirdPartyLinks', () => {

    it('returns third party links for a venue', () => {

        let links = clintonBaking.getThirdPartyLinks()
        return links.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'links')
        })
    })
})

describe('Test Venue.getMenu', () => {

    it('returns a menu for a venue', () => {

        let menu = clintonBaking.getMenu()
        return menu.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'menu')
        })
    })
})

describe('Test Venue.getTips', () => {

    it('returns tips for a venue', () => {
        let tips = clintonBaking.getTips()
        return tips.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'tips')
        })
    })
})

describe('Test Venue.getLists', () => {

    it('returns a list of lists the venue is part of', () => {
        let lists = clintonBaking.getLists()
        return lists.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'lists')
        })
    })
})

describe('Test Venue.getSpecialDetails', () => {

    it('returns details for a given special', () => {
        let specialId = '4e0debea922e6f94b1410bb7'
        let specialDetails = clintonBaking.getSpecialDetails(specialId)
        return specialDetails.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'special')
            assert.equal(specialId, data.response.special.id)
        })
    })

    it('returns a 404 not found when passed an invalid id', () => {

        let invalidSpecialId = "somerandomid"
        let specialDetails = clintonBaking.getSpecialDetails(invalidSpecialId)

        return specialDetails.catch( (errorMsg) => {

            assert.include(errorMsg, '404')
            assert.include(errorMsg, 'No matching specials endpoint')

        })

    })


})
