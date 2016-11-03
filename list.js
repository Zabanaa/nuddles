const Client    = require('./client')
const utils     = require('./utils')

const List = function(clientConfig, listId=helpers.required('listId argument must be specified')) {
    Client.call(this, clientConfig)
    this.listId = listId
    this.rootPath = '/lists/' + this.listId
}

List.prototype.callApi = Client.prototype.callApi

List.prototype.getDetails = function() {
    return this.callApi(this.rootPath)
}

List.prototype.getFollowers = function() {
    return this.callApi(this.rootPath + '/followers')
}

List.prototype.getSaves = function() {
    return this.callApi(this.rootPath + '/saves')
}

module.exports = List
