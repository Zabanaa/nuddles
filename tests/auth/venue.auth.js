const chai          = require('chai')
const assert        = chai.assert
const Venue         = require('../../index').Venue
const client        = require('../config').authClient
const venue         = new Venue(client, "584fb4fd9465dd73e761838f")

describe("TEST Venue.add", () => {

    xit("Adds a venue", () => {

        let venueDetails    = { ll: "48.853401, 2.375808", name: "New Zabana Outpost", address: "A 2km d'ou je traine" }
        let addVenue        = venue.add(venueDetails)

        return addVenue.then( data => {
            console.log(data.response.venue.id)
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'venue')
        })
    })
})

describe("TEST Venue.herenow", () => {

    it("tells you how many people are in the venue", () => {
        let params      = {limit: 10}
        let hereNow     = venue.herenow(params)

        return hereNow.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'hereNow')
        })
    })
})

describe("TEST Venue.like", () => {

    it("likes a venue", () => {
        let likeVenue   = venue.like()

        return likeVenue.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'likes')
        })
    })
})

describe("TEST Venue.dislike", () => {

    it("dislikes a venue", () => {
        let dislikeVenue   = venue.dislike()

        return dislikeVenue.then( data => {
            assert.equal(data.meta.code, 200)
        })
    })
})

describe("TEST Venue.proposeedit", () => {

    it("edits a venue", () => {

        let venuedDetails = { name: "Edited name" }
        let proposeEdit   = venue.proposeEdit()

        return proposeEdit.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'woes')
        })
    })
})
