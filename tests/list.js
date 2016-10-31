const chai          = require('chai')
const assert        = chai.assert
const Nuddles       = require('../nuddles')
const List          = require('../list')
const credentials   = require('../credentials')

let nuddles = new Nuddles({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret
})

const karimsList = new List(nuddles, "355195508/tips")

describe('Test List.getDetails', () => {

    it('returns details about the list', () => {

        let details = karimsList.getDetails()
        return details.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, "list")
            assert.equal(karimsList.listId, data.response.list.id)
        })
    })

    it('returns a 400 when a wrong list id is passed', () => {

        karimsList.venueId = "355195508/kwjtips"
        let invalidVenueId = karimsList.venueId.split('/')[1]
        let details        = karimsList.getDetails()

        return details.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, `Value ${invalidVenueId} is invalid for list token`)
        })
    })
})

