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

