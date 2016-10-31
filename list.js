const Nuddles = require('./nuddles')

const List = function(nuddlesObject, listId) {
    Nuddles.call(this, nuddlesObject)
    this.listId = listId
}

List.prototype = Object.create(Nuddles.prototype)
List.prototype.constructor = List

module.exports = List
