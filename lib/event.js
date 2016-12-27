class Event {

    constructor(client, eventId=undefined) {
        this.client  = client
        this.eventId = eventId
    }

    search(params={}) {
        return this.client.GET('/events/search', params)
    }

    getCategories() {
        return this.client.GET('/events/categories')
    }

}

module.exports = Event
