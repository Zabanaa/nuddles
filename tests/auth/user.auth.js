const chai          = require('chai')
const assert        = chai.assert
const User          = require('../../index').User
const client        = require('../config').authClient
const user          = new User(client, "self")

describe("TEST User.getDetails", () => {

    it('returns details for a user', () => {
        let userDetails = user.getDetails()
        return userDetails.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'user')
        })
    })

})

describe("TEST User.search", () => {

    it('searches users based on the query', () => {
        let params      = { email: "karim.cheurfi@gmail.com" }
        let searchUser  = user.search(params)
        return searchUser.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'results')
            assert.isArray(data.response.results)
        })
    })
})

describe("TEST User.getVenueHistory", () => {

    it('returns a history of all the venues visited by the user', () => {
        let getVenueHistory  = user.getVenueHistory()
        return getVenueHistory.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'venues')
        })
    })
})

describe("TEST User.getFriends", () => {

    it('returns a list of friends', () => {
        let getFriends  = user.getFriends()
        return getFriends.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'friends')
        })
    })
})

describe("TEST User.getPhotos", () => {

    it('returns a list of photos', () => {
        let getPhotos  = user.getPhotos()
        return getPhotos.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'photos')
        })
    })
})

describe("TEST User.getChekins", () => {

    it('returns a list of checkins', () => {
        let getCheckins  = user.getCheckins()
        return getCheckins.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'checkins')
        })
    })
})

describe("TEST User.venueLikes", () => {

    it('returns a list of venue likes', () => {
        let getVenueLikes  = user.getVenueLikes()
        return getVenueLikes.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'venues')
        })
    })
})

describe("TEST User.getMayorships", () => {

    it('returns a list of mayorships', () => {
        let getMayorships  = user.getMayorships()
        return getMayorships.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'mayorships')
        })
    })
})

describe("TEST User.getLists", () => {

    it('returns a list of lists', () => {
        let getLists  = user.getLists()
        return getLists.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'lists')
        })
    })
})

