const  chai         = require('chai')
const  assert       = chai.assert
const  Nuddles      = require('../nuddles')
const  credentials  = require('../credentials')



describe("Calls to the API actually work", (done) => {

    it('returns a list of categories', () => {

        const nuddles = new Nuddles({
            clientId: credentials.clientId,
            clientSecret: credentials.clientSecret
        })

        let categories = nuddles.callApi('/venues/categories', {})
        return categories.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'categories')
            assert.isArray(data.response.categories)
            assert.isAtLeast(data.response.categories.length, 1, 'The categories array is at least equal to 1')

        })

    })


})


