const utils = require('../utils')

class Tip {

    constructor(client, tipId=undefined) {
        this.client = client
        this.tipId  = tipId
    }

    add(body, venueId) {
        return this.client.POST(`/tips/add`, body)
    }

    getLikes(tipId=this.tipId) {
        return this.client.GET(`/tips/${tipId}/likes`)
    }

    getSaves(tipId=this.tipId) {
        return this.client.GET(`/tips/${tipId}/saves`)
    }

    getLists(tipId=this.tipId) {
        return this.client.GET(`/tips/${tipId}/listed`)

    }

    unmark(tipId=this.tipId){
        return this.client.POST(`/tips/${tipId}/unmark`)
    }

    flag(body, tipId=this.tipId) {
        return this.client.POST(`/tips/${tipId}/flag`, body)
    }

    like(tipId=this.tipId) {
        return this.client.POST(`/tips/${tipId}/like`)
    }

}

module.exports = Tip
