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
})
