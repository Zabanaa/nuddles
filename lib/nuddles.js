const nets          = require('nets')
const utils         = require('../utils')
const root          = "https://api.foursquare.com/v2"
const authRoot      = "https://foursquare.com/oauth2"
const encoding      = undefined

class Nuddles {

    constructor(config) {
        utils.validateConfig(config)
        this.clientId        = config.clientId
        this.clientSecret    = config.clientSecret
        this.apiVersion      = config.apiVersion || "20161206"
        this.redirectUri     = config.redirectUri
        this._accessToken    = config.accessToken
        this.authenticated   = this._accessToken ? true : false
    }

    generateOAuthTokenURL(authorizationCode) {
        let params  = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: 'authorization_code',
            redirect_uri: this.redirectUri,
            code: authorizationCode
        }

        params = utils.serialise(params)
        return `${authRoot}/access_token?${params}`
    }

    get creds() {
        if (this.authenticated) return `v=${this.apiVersion}&oauth_token=${this._accessToken}`
        else { return `v=${this.apiVersion}&client_id=${this.clientId}&client_secret=${this.clientSecret}` }
    }

    get auth_url() {
        return `${authRoot}/authenticate?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}`
    }

    requestAccessToken(authorizationCode) {
        const url         = this.generateOAuthTokenURL(authorizationCode)
        const method      = 'GET'
        return utils.makeRequest( {url, method, encoding} )
    }

    set accessToken(accessToken) {
        this._accessToken    = accessToken
        this.authenticated   = true
    }

    GET(path, params={}) {

        const queryString   = utils.serialise(params)
        const url           = `${root}${path}?${queryString}&${this.creds}`
        const method        = 'GET'
        const options       = { url, method, encoding }

        return utils.makeRequest(options)
    }

    POST(path, body={}) {

        const payload       = utils.serialise(body)
        const url           = `${root}${path}?${payload}&${this.creds}`
        const method        = 'POST'
        const headers       = {'Content-Type': 'application/x-www-form-urlencoded'}
        const options       = { url, method, headers, encoding }

        return utils.makeRequest(options)
    }

    suggestCompletion(params={}) {
        return this.GET('/venues/suggestCompletion', params)
    }
}

module.exports = Nuddles
