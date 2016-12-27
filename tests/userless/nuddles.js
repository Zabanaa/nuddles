const chai          = require('chai')
const assert        = chai.assert
const Nuddles       = require('../../index').Client
let clientId, clientSecret, redirectUri

try {
    const creds         = { clientId, clientSecret, redirectUri } = require('../../config/credentials')
}
catch(e) {
    clientId         = process.env['CLIENT_ID']
    clientSecret     = process.env['CLIENT_SECRET']
    redirectUri      = process.env['REDIRECT_URI']
}

let client

beforeEach( () => {
    client = new Nuddles({clientId, clientSecret, redirectUri: "http://localhost"})
})


describe("Test Nuddles.creds getter", () => {

    it("returns the clientId and clientSecret if the client is userless", () => {
        let creds = client.creds
        assert.include(creds, 'client_id')
        assert.include(creds, client.clientId)
        assert.include(creds, 'client_secret')
        assert.include(creds, client.clientSecret)
    })

    it("returns the accessToken if the client is authenticated", () => {
        client.accessToken  = "someaccesstoken"
        let creds           = client.creds
        assert.notInclude(creds, 'clientId')
        assert.notInclude(creds, 'clientSecret')
        assert.include(creds, 'oauth_token')
        assert.include(creds, client._accessToken)
    })
})

describe("Test Nuddles.auth_url getter", () => {
    it('returns a url to the authorize endpoint', () => {
        let auth_url = client.auth_url
        assert.include(auth_url, 'client_id')
        assert.include(auth_url, 'redirect_uri')
        assert.include(auth_url, 'response_type=code')
        assert.include(auth_url, client.clientId)
        assert.include(auth_url, client.redirectUri)
    })
})

describe("Test Nuddles.accessToken setter", () => {

    it("correctly sets the access token", () => {
        assert.equal(client._accessToken, undefined)
        assert.isFalse(client.authenticated)
        let token = "token"
        client.accessToken = token
        assert.equal(client._accessToken, token)
        assert.isTrue(client.authenticated)
    })
})

describe("Test Nuddles.generateOAuthTokenURL method", () => {

    it("generates a correct oauth token request URL", () => {
        let authCode = "somerandomauthcode"
        let tokenUrl = client.generateOAuthTokenURL(authCode)
        assert.include(tokenUrl, client.clientId)
        assert.include(tokenUrl, client.clientSecret)
        assert.include(tokenUrl, client.redirectUri)
        assert.include(tokenUrl, authCode)
        assert.include(tokenUrl, 'grant_type=authorization_code')
    })

})

describe('Test Nuddles.searchVenues', () => {

    it('searches venues and returns results based on location',() => {

        let params          = {'near': 'Paris, France'}
        let searchVenues    = client.searchVenues(params)
        return searchVenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venues')
            assert.isArray(response.venues)
            assert.include(response.geocode.where, 'paris france')
        })
    })
})

describe('Test Nuddles.getChekinsLikes', () => {

    it('returns a list of likes for a specific checkin', () => {

        let checkinId           = '502bcde16de4146b7f104ac6'
        let getCheckinLikes     = client.getCheckinLikes(checkinId)

        return getCheckinLikes.then( data => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'likes')
            assert.isArray(response.likes.items)
        })
    })
})

describe('Test Nuddles tips methods', () => {

    let tipId = '4e5b969ab61c4aaa3e183989'

    it('Nuddles.getTipLikes returns a list of likes for a specific tip', () => {

        let getTipLikes = client.getTipLikes(tipId)

        return getTipLikes.then( data => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'likes')
            assert.property(response.likes, 'count')
        })

    })

    it('Nuddles.getTipSaves returns a list of saves for a specific tip', () => {

        let getTipSaves = client.getTipSaves(tipId)

        return getTipSaves.then( data => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'saves')
            assert.property(response.saves, 'count')
            assert.isArray(response.saves.items)
        })
    })

    it('Nuddles.getTipLists returns a list of lists for a specific tip', () => {

        let getTipLists = client.getTipLists(tipId)

        return getTipLists.then( data => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'lists')
            assert.property(response.lists, 'count')
            assert.isArray(response.lists.groups)
        })
    })
})

describe('Test Nuddles.getVenueDetail', (done) => {

    it('returns all the details for a specific venue given an ID', () => {
        let venueId      = '4adcda0af964a520623421e3'
        let venueDetails = client.getVenueDetail(venueId)

        return venueDetails.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venue')
            assert.isObject(response.venue, "venue is indeed of type object")
        })
    })

    it('returns a 400 if the provided venueID is invalid', () => {
        let venueId = "invalididbruv"
        let venueDetails = client.getVenueDetail(venueId)
        return venueDetails.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, venueId + ' is invalid for venue id')
        })
    })

})

describe(' Test Nuddles.getVenueCategories', (done) => {

    it('returns a list of all categories', () => {
        let venueCategories = client.getVenueCategories()
        return venueCategories.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'categories')
            assert.isArray(response.categories)
            assert.isAtLeast(response.categories.length, 1)
        })
    })

})

describe('Test Nuddles.getTrendingVenues', (done) => {

    it('returns a list of trending venues', () => {

        let queryParams          = {near: 'Paris, France', limit: 3, radius: 2000}
        let trendingVenues       = client.getTrendingVenues(queryParams)

        return trendingVenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'venues')
            assert.isArray(response.venues)
            assert.include(response.geocode.where, 'paris france')
        })
    })

    it('returns a 400 if no location parameter is passed', () => {

        let queryParams          = {limit: 3, radius: 1700}
        let trendingVenues       = client.getTrendingVenues(queryParams)

        return trendingVenues.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter ll or userll or near')
        })
    })
})

describe('Test Nuddles.exploreVenues', () => {

    it('returns one or more groups of recommendations', () => {

        let params          = {near: 'Paris, France', limit: 3, radius: 1700}
        let recommendations = client.exploreVenues(params)

        return recommendations.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.equal(params.near, response.geocode.displayString)
        })
    })

    it('returns a 400 if no location attribute is passed', () => {

        let params          = {limit: 3}
        let recommendations = client.exploreVenues(params)

        return recommendations.catch( (errorMsg) => {
            assert.include(errorMsg, 400)
            assert.include(errorMsg,'Must provide parameters (ll and radius) or (sw and ne) or (near and radius) or (nearVenueId and ll) or (superVenueId) or (polygon)')

        })

    })

})

describe('Test Nuddles.suggestCompletion', () => {

    let params      = {near: 'Paris, France', query: 'Pizz'}

    it('Returns a list of mini venues based on a search query', () => {

        let minivenues  = client.suggestCompletion(params)

        return minivenues.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'minivenues')
            assert.isArray(response.minivenues)
        })
    })

    it('Returns a 400 when missing query or location parameters', () => {
        delete params.query

        let minivenues = client.suggestCompletion(params)

        return minivenues.catch( (errorMsg) => {

            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter query')
        })
    })

    it('Returns an empty array when passed an unknown query parameter', () => {

        params.query = "whfwhfw"
        let minivenues = client.suggestCompletion(params)
        return minivenues.then( (data) => {
            let response = data.response
            assert.equal(0, response.minivenues.length)
        })
    })
})

describe('Test Nuddles.searchSpecials', () => {

    it('returns a list of specials', () => {
        let params   = { ll: '48.8676606,2.3498557' }
        let specials = client.searchSpecials(params)

        return specials.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'specials')
        })
    })

    it('returns a 400 bad request if no ll param is passed', () => {

        let specials = client.searchSpecials()
        return specials.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter ll')
        })
    })
})

describe('Test Nuddles.searchEvents', () => {


    it('returns a list of events matching the search params', () => {
        let params   = {domain: 'songkick.com', eventId: '8183976'}
        let events = client.searchEvents(params)

        return events.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'events')
        })
    })

    it('returns a 400 bad request if no domain is passed', () => {
        let params   = {eventId: '8183976'}
        let events = client.searchEvents(params)
        return events.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter domain')
        })
    })

    it('returns a 400 bad request if no eventId is passed', () => {
        let params   = {domain: 'songkick.com'}
        let events = client.searchEvents(params)
        return events.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must specify eventId or participantId')
        })
    })

})

describe('Test Nuddles.getEventCategories', () => {

    it('return a list of event categories', () => {
        let eventCategories = client.getEventCategories()

        return eventCategories.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'categories')
        })
    })

})

