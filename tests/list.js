const chai          = require('chai')
const assert        = chai.assert
const nuddles       = require('../index')
const Nuddles       = nuddles.Nuddles
const List          = require('../lib/list')
const credentials   = { clientId, clientSecret } = require('../config/credentials')

let client = new Nuddles({ clientId, clientSecret })

const karimsList = new List(client, "5002dcdae4b0004dbeb53994")

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

        let invalidVenueId = "5002dcdae4b0004dbeb53994oioi"
        karimsList.venueId = invalidVenueId

        let details        = karimsList.getDetails()

        return details.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, `Value ${invalidVenueId} is invalid for list token`)
        })
    })
})

describe('Test List.getDetails', () => {

    it("returns a list's followers", () => {

        let followers = karimsList.getFollowers()
        return followers.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, "followers")
        })
    })
})

describe('Test List.getSaves', () => {

    it("returns a list of users who have saved this list", () => {

        let saves = karimsList.getSaves()
        return saves.then( (data) => {
            assert.equal(200, data.meta.code)
            assert.property(data.response, "saves")
        })
    })
})
