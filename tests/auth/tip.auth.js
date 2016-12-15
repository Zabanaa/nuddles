const chai          = require('chai')
const assert        = chai.assert
const Tip           = require('../../index').Tip
const client        = require('../config').authClient
const tip           = new Tip(client, "585163590319b824e9788d3e")

describe("TEST Tip.add", () => {

    xit("adds a tip", () => {

        let newTip      = { venueId: "4b867a97f964a520e48b31e3", text: "awqheuwhejwqsds Awesome Madjid sds"}
        let addTip      = tip.add(newTip)

        return addTip.then( data => {
            console.log(data)
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'tip')
        })
    })
})

describe("TEST Tip.likes", () => {

    it("returns a list of likes for a tip", () => {

        let tipLikes      = tip.getLikes()

        return tipLikes.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'likes')
        })
    })
})

describe("TEST Tip.getLists", () => {

    it("returns a list of lists for a tip", () => {

        let tipLists    =   tip.getLists()

        return tipLists.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'lists')
        })
    })
})

describe("TEST Tip.getSaves", () => {

    it("returns a list of saves for a tip", () => {

        let tipSaves    = tip.getSaves()

        return tipSaves.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'saves')
        })
    })
})

describe("TEST Tip.getLists", () => {

    it("returns a list of lists for a tip", () => {

        let tipLists    =   tip.getLists()

        return tipLists.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'lists')
        })
    })
})

describe("TEST Tip.unmark ", () => {

    xit("unmarks a tip", () => {

        let unmarkTip  = tip.unmark(tipId="851577f1e1de551283c4acc")

        return unmarkTip.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'tip')
        })

    })
})

describe("TEST Tip.unmark ", () => {

    it("likes a tip", () => {

        let likeTip  = tip.like()

        return likeTip.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'likes')
        })
    })
})

describe("TEST Tip.flag ", () => {

    xit("flags a tip", () => {

        let flagDetails     = { problem: "spam" }
        let flagTip         = tip.flag(flagDetails)

        return flagTip.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'flags')
        })
    })
})
