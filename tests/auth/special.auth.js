const chai          = require('chai')
const assert        = chai.assert
const Special       = require('../../index').Special
const client        = require('../config').authClient
const special       = new Special(client, "4e0debea922e6f94b1410bb7")

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
