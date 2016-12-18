const utils = require('../utils')

class Special {

    constructor(client, specialId=utils.required("specialId must be passed")) {
        this.client     = client
        this.specialId  = specialId
    }

    getDetails(params, specialId=this.specialId) {
        return this.client.GET(`/specials/${specialId}`, params)
    }

    flag(body, specialId=this.specialId) {
        return this.client.POST(`/specials/${specialId}/flag`, body)
    }

}

module.exports = Special
