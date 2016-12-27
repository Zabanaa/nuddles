const chai          = require('chai')
const assert        = chai.assert
const Event         = require('../../index').Event
const client        = require('../config').authClient
const myEvent       = new Event(client)

describe('Test Nuddles.searchEvents', () => {


    it('returns a list of events matching the search params', () => {
        let params   = {domain: 'songkick.com', eventId: '8183976'}
        let events = myEvent.search(params)

        return events.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'events')
        })
    })

    it('returns a 400 bad request if no domain is passed', () => {
        let params   = {eventId: '8183976'}
        let events = myEvent.search(params)
        return events.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must provide parameter domain')
        })
    })

    it('returns a 400 bad request if no eventId is passed', () => {
        let params   = {domain: 'songkick.com'}
        let events = myEvent.search(params)
        return events.catch( (errorMsg) => {
            assert.include(errorMsg, '400')
            assert.include(errorMsg, 'Must specify eventId or participantId')
        })
    })

})

describe('Test Nuddles.getEventCategories', () => {

    it('return a list of event categories', () => {
        let eventCategories = myEvent.getCategories()

        return eventCategories.then( (data) => {
            let response = data.response
            assert.equal(200, data.meta.code)
            assert.property(response, 'categories')
        })
    })

})

