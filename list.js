const Nuddles = require('./nuddles')

const List = function(nuddlesObject, listId) {
    Nuddles.call(this, nuddlesObject)
    this.listId = listId
    this.rootPath = '/lists/' + this.listId
}

List.prototype = Object.create(Nuddles.prototype)
List.prototype.constructor = List

List.prototype.getDetails = function() {
    return this.callApi(this.rootPath)
}

List.prototype.getFollowers = function() {
    return this.callApi(this.rootPath + '/followers')
}

module.exports = List
