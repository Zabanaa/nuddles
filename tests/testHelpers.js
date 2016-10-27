const chai      = require('chai')
const chaiHttp  = require('chai-http')
const assert    = chai.assert
const helpers   = require('../helpers')

describe('Object required', () => {
    
    it('throws an error if the argument passed is not an object', () => {
        assert.throws( function(){helpers.objectRequired('hello')}, Error, "An object must be passed")
    })

    it('does not throw an error if the argument passed is an object', () => {
        assert.doesNotThrow( function(){ helpers.objectRequired({name: "karim", city: "paris"})}, Error)
    })
})

describe('Serialise Query Parameters Object', () => {
    // assertEqual
    // assertThrows if no object is passed 
})

describe('Make calls to API', () => {


})


