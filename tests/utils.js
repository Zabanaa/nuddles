const chai      = require('chai')
const assert    = chai.assert
const utils     = require('../utils')

describe('Test utils.serialise()', () => {

    let obj     = {key1: "key_1", key2: "key_2"}
    let result  = "key1=key_1&key2=key_2"

    it('serialises an object to a URL safe string', () => {
        assert.equal( utils.serialise(obj), result )
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
