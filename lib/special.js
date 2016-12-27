const utils = require('../utils')

class Special {

    constructor(client, specialId=undefined) {
        this.client     = client
        this.specialId  = specialId
    }

    search(params={}) {
        return this.client.GET('/specials/search', params)
    }

    getDetails(params, specialId=this.specialId) {
        return this.client.GET(`/specials/${specialId}`, params)
    }

    flag(body, specialId=this.specialId) {
        return this.client.POST(`/specials/${specialId}/flag`, body)
    }

}

module.exports = Special
