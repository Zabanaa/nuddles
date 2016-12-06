const utils     = require('../utils')

class List {

    constructor(client, listId=utils.required("Missing listId")) {
        this.client     = client
        this.listId     = listId
        this.rootPath   = `/lists/${this.listId}`
    }

    getDetails() {
        return this.client.GET(this.rootPath)
    }

    getFollowers() {
        return this.client.GET(`${this.rootPath}/followers`)
    }

    getSaves() {
        return this.client.GET(`${this.rootPath}/saves`)
    }

}

module.exports = List
