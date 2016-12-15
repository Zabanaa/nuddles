const chai          = require('chai')
const assert        = chai.assert
const Photo         = require('../../index').Photo
const client        = require('../config').authClient

const photo         = new Photo(client, "4d0fb8162d39a340637dc42b")

describe("TEST Photo.getDetails", () => {

    it("returns details for a photo", () => {

        let photoDetails    = photo.getDetails()
        return photoDetails.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'photo')

        })
    })
})
