const chai          = require('chai')
const assert        = chai.assert
const Nuddles       = require('../nuddles')
const credentials   = require('../credentials')

const nuddles       = new Nuddles({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret
})

describe('Test prototype methods work', (done) => {

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
