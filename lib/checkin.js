const utils     = require('../utils')

class Checkin {

    constructor(client, checkinId=undefined) {

        this.client     = client
        this.checkinId  = checkinId
    }

    getDetails(checkinId=this.checkinId) {
        return this.client.GET(`/checkins/${checkinId}`)
    }

    recent(params={}) {
        return this.client.GET(`/checkins/recent`)
    }

    add(body) {
        return this.client.POST(`/checkins/add`, body)
    }

    like(checkinId=this.checkinId) {
        return this.client.POST(`/checkins/${checkinId}/like`)
    }

    likes(checkinId=this.checkinId){
        return this.client.GET(`/checkins/${checkinId}/likes`)
    }

    addPost(body, checkinId=this.checkinId) {
        return this.client.POST(`/checkins/${checkinId}/addpost`, body)
    }

    addComment(body, checkinId=this.checkinId) {
        return this.client.POST(`/checkins/${checkinId}/addcomment`, body)
    }

    deleteComment(body, checkinId=this.checkinId){
        return this.client.POST(`/checkins/${checkinId}/deletecomment`, body)
    }
}

module.exports = Checkin
