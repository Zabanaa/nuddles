const utils = require('../utils')

class Event {

    constructor(client, eventId=utils.require("Event Id must be passed")) {
        this.client     = client
        this.eventId    = eventId
    }

    getDetails(eventId=this.eventId) {
        return this.client.GET(`/events/`)
    }
}

module.exports = Event
