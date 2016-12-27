const utils = require('../utils')

class Photo {

    constructor(client, photoId=undefined) {
        this.client = client
        this.photoId = photoId
    }

    getDetails(photoId=this.photoId) {
        return this.client.GET(`/photos/${photoId}`)
    }

}

module.exports  =  Photo
