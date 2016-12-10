const utils     = require('../utils')

class List {

    // LIST ID PARAM IS NOW OPTIONAL
    // (add default params bruv)
    // ADD URLS to the docs as comments

    constructor(client, listId=utils.required("Missing listId")) {
        this.client     = client
        this.listId     = listId
        this.rootPath   = `/lists/${this.listId}`
    }

    getDetails(listId=this.listId) {
        return this.client.GET(`/lists/${listId}`)
    }

    getFollowers(listId=this.listId) {
        return this.client.GET(`/lists/${listId}/followers`)
    }

    getSaves(listId=this.listId) {
        return this.client.GET(`/lists/${listId}/saves`)
    }

    add(body) {
        return this.client.POST(`/lists/add`, body)
    }

    update(body, listId=this.listId) {
        return this.client.POST(`/lists/${listId}/update`, body)
    }

    share(body, listId=this.listId) {
        return this.client.POST(`/lists/${listId}/share`, body)
    }

    requestSuitableTips(params, listId=this.listId) {
        return this.client.GET(`/lists/${listId}/suggesttip`, params)
    }

    requestSuitablePhotos(params, listId=this.listId) {
        return this.client.GET(`/lists/${listId}/suggestphoto`, params)
    }

    requestSuitableVenues(listId=this.listId) {
        return this.client.GET(`/lists/${listId}/suggestvenues`)
    }

    addItem(body, listId=this.listId) {
        return this.client.POST(`/lists/${listId}/additem`, body)
    }

    updateItem(body, listId=this.listId) {
         return this.client.POST(`/lists/${listId}/updateitem`, body)
    }

    deleteItem(body, listId=this.listId) {
        return this.client.POST(`/lists/${listId}/deleteitem`, body)
    }

    moveItem(body, listId=this.listId) {
        return this.client.POST(`/lists/${listId}/moveitem`, body)
    }

    getItemDetails(itemId, listId=this.listId) {
        return this.client.GET(`/lists/${listId}/${itemId}`)
    }

    follow(listId=this.listId) {
        return this.client.POST(`/lists/${listId}/follow`)
    }

    unfollow(listId=this.listId) {
        return this.client.POST(`/lists/${listId}/unfollow`)
    }

}

module.exports = List
