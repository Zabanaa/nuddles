const  chai         = require('chai')
const  assert       = chai.assert
const  nuddles      = require('../index')
const  credentials  = require('../credentials')

let client = new nuddles.Client({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret
})

describe("Calls to the API actually work", (done) => {

    it('returns a list of categories', () => {

        let categories = client.callApi('/venues/categories', {})
        return categories.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, 'categories')
            assert.isArray(data.response.categories)
            assert.isAtLeast(data.response.categories.length, 1, 'The categories array is at least equal to 1')
        })
    })

    it('returns a 404 when a non-existent endpoint is passed', () => {

        let invalidCall    = client.callApi('/someendpoint', {})
        return invalidCall.catch( (errorMsg) => {
            assert.include(errorMsg, "Endpoint not found")
            assert.include(errorMsg, "404")
        })
    })

    it('returns a 400 bad request if invalid credentials are passed', () => {

        client = new nuddles.Client({
            clientId: "bruvvv",
            clientSecret: "secretsaucebitch"
        })

        let categories = client.callApi('/venues/categories', {})
        return categories.catch( (errorMsg) => {
            assert.include(errorMsg, "Missing access credentials.")
            assert.include(errorMsg, "400")
        })

    })

})
