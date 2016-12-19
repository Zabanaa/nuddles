const utils = require('../utils')

class User {

    constructor(client, userId=utils.required('UserId must be passed')) {
        this.client = client
        this.userId = userId
    }

    getDetails(userId=this.userId) {
        return this.client.GET(`/users/${userId}`)
    }

    search(params={}) {
        return this.client.GET(`/users/search`, params)
    }

    getVenueHistory(params={}, userId=this.userId) {
        return this.client.GET(`/users/${userId}/venuehistory`, params)
    }

    getPhotos(params={}, userId=this.userId) {
        return this.client.GET(`/users/${userId}/photos`, params)
    }

    getFriends(params={}, userId=this.userId) {
        return this.client.GET(`/users/${userId}/friends`, params)
    }

    getCheckins(params={}, userId=this.userId) {
        return this.client.GET(`/users/${userId}/checkins`, params)
    }

    getVenueLikes(params={}, userId=this.userId) {
        return this.client.GET(`/users/${userId}/venuelikes`, params)
    }

    getMayorships(params={}, userId=this.userId) {
        return this.client.GET(`/users/${userId}/mayorships`, params)
    }

    getLists(params={}, userId=this.userId) {
        return this.client.GET(`/users/${userId}/lists`, params)
    }

    setPings(body, userId) {
        return this.client.POST(`/users/${userId}/setpings`, body)
    }
}

module.exports = User
