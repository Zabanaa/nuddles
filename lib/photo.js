const utils = require('../utils')

class Photo {

    constructor(client, photoId=utils.required('Photo id must be passed') ) {
        this.client = client
        this.photoId = photoId
    }

    getDetails(photoId=this.photoId) {
        return this.client.GET(`/photos/${photoId}`)
    }

}

module.exports  =  Photo
