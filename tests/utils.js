const chai      = require('chai')
const assert    = chai.assert
const utils     = require('../utils')

describe('Test utils.checkIsObject()', () => {

    it('throws an error if the argument passed is not an object', () => {
        assert.throws( function(){utils.checkIsObject('hello')}, Error, "An object must be passed")
    })

    it('does not throw an error if the argument passed is an object', () => {
        assert.doesNotThrow( function(){ utils.checkIsObject({name: "karim", city: "paris"})}, Error)
    })
})

describe('Test utils.urlSerialise()', () => {

    let obj     = {key1: "key_1", key2: "key_2"}
    let result  = "key1=key_1&key2=key_2"

    it('serialises an object to a URL safe string', () => {
        assert.equal( utils.urlSerialise(obj), result )
    })

})

describe('Test utils.required()', () => {

    let someFunc = (someValue=utils.required('pass the value')) => {
        return someValue
    }

    it('Throws an error if the argument is not overriden', () => {
       assert.throws( function() {someFunc()}, Error, "pass the value" )
    })

})
