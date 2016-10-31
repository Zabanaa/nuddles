const chai          = require('chai')
const assert        = chai.assert
const Nuddles       = require('../nuddles')
const Venue         = require('../venue')
const credentials   = require('../credentials')

let nuddles = new Nuddles({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret
})

const clintonBaking = new Venue(nuddles, "40a55d80f964a52020f31ee3")

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

        const someRandomVenue = new Venue(nuddles, "someid")
        let venueDetails = someRandomVenue.getDetails()
        return venueDetails.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, `Value ${someRandomVenue.venueId} is invalid for venue id`)
        })
    })
})
