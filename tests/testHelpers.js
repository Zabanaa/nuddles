const chai      = require('chai')
const assert    = chai.assert
const helpers   = require('../helpers')

describe('Object required', () => {
    
    it('throws an error if the argument passed is not an object', () => {
        assert.throws( function(){helpers.checkIsObject('hello')}, Error, "An object must be passed")
    })

    it('does not throw an error if the argument passed is an object', () => {
        assert.doesNotThrow( function(){ helpers.checkIsObject({name: "karim", city: "paris"})}, Error)
    })
})

describe('Serialise Query Parameters Object', () => {

    let obj     = {key1: "key_1", key2: "key_2"}
    let result  = "key1=key_1&key2=key_2&v=20161026"
    
    it('serialises an object to a URL safe string', () => {
        assert.equal( helpers.urlSerialise(obj), result )
    })

    it('throws an error if no object is passed', () => {
        assert.throws( function(){ helpers.urlSerialise("kejre") }, Error)
    })
})
