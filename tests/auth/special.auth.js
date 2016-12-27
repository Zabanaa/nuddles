const chai          = require('chai')
const assert        = chai.assert
const Special       = require('../../index').Special
const client        = require('../config').authClient
const special       = new Special(client, "4e0debea922e6f94b1410bb7")

describe('Test Nuddles.searchSpecials', () => {

    it('returns a list of specials', () => {
        let params   = { ll: '48.8676606,2.3498557' }
        let specials = special.search(params)

        return specials.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'specials')
        })
    })

    it('returns a 400 bad request if no ll param is passed', () => {

        let specials = special.search()
        return specials.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter ll')
        })
    })
})

describe("TEST Special.getDetails", () => {

    it("returns details for a special", () => {

        let params      = { venueId: "4e0deab3922e6f94b1410af3" }
        let getDetails  = special.getDetails(params)

        return getDetails.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'special')
        })

    })

})

describe("TEST Special.flag", () => {

    it("flags a special", () => {

        let params       = { venueId: "4e0deab3922e6f94b1410af3", problem: "other"}
        let flagSpecial  = special.flag(params)

        return flagSpecial.then( data => {
            assert.equal(data.meta.code, 200)
            assert.isObject(data.response)
        })

    })

})
