const chai          = require('chai')
const assert        = chai.assert
const Event         = require('../../index').Checkin
const client        = require('../config').authClient
const event         = new Event(client, "someId")

describe("TEST Event.getDetails", () => {

    it("Returns details for a specific venues", () => {
        //
    })
})

