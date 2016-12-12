const utils     = require('../utils')

class List {

    constructor(client, listId=utils.required("Missing listId")) {
        this.client     = client
        this.listId     = listId
        this.rootPath   = `/lists/${this.listId}`
    }

    getDetails(listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/lists
        return this.client.GET(`/lists/${listId}`)
    }

    getFollowers(listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/followers
        return this.client.GET(`/lists/${listId}/followers`)
    }

    getSaves(listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/saves
        return this.client.GET(`/lists/${listId}/saves`)
    }

    add(body) {
        // https://developer.foursquare.com/docs/lists/add
        return this.client.POST(`/lists/add`, body)
    }

    update(body, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/update
        return this.client.POST(`/lists/${listId}/update`, body)
    }

    share(body, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/share
        return this.client.POST(`/lists/${listId}/share`, body)
    }

    requestSuitableTips(params, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/suggesttip
        return this.client.GET(`/lists/${listId}/suggesttip`, params)
    }

    requestSuitablePhotos(params, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/suggestphoto
        return this.client.GET(`/lists/${listId}/suggestphoto`, params)
    }

    requestSuitableVenues(listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/suggestvenues
        return this.client.GET(`/lists/${listId}/suggestvenues`)
    }

    addItem(body, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/additem
        return this.client.POST(`/lists/${listId}/additem`, body)
    }

    updateItem(body, listId=this.listId) {
         // https://developer.foursquare.com/docs/lists/updateitem
         return this.client.POST(`/lists/${listId}/updateitem`, body)
    }

    deleteItem(body, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/deleteitem
        return this.client.POST(`/lists/${listId}/deleteitem`, body)
    }

    moveItem(body, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/moveitem
        return this.client.POST(`/lists/${listId}/moveitem`, body)
    }

    getItemDetails(itemId, listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/items
        return this.client.GET(`/lists/${listId}/${itemId}`)
    }

    follow(listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/follow
        return this.client.POST(`/lists/${listId}/follow`)
    }

    unfollow(listId=this.listId) {
        // https://developer.foursquare.com/docs/lists/unfollow
        return this.client.POST(`/lists/${listId}/unfollow`)
    }

}

module.exports = List
