const Nuddles   = require('./nuddles')
const utils     = require('./utils')

const List = function(nuddlesObject, listId=helpers.required('listId argument must be specified')) {
    Nuddles.call(this, nuddlesObject)
    this.listId = listId
    this.rootPath = '/lists/' + this.listId
}

List.prototype.callApi = Nuddles.prototype.callApi

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
