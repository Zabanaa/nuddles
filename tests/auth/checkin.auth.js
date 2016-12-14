const chai          = require('chai')
const assert        = chai.assert
const Checkin       = require('../../index').Checkin
const client        = require('../config').authClient
const checkin       = new Checkin(client, "584ffb7d02b60e24a011308e")

describe("TEST Checkin.details", () => {

    it("returns details for a checkin", () => {

        let getDetails = checkin.getDetails()

        return getDetails.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'checkin')
        })
    })
})

describe("TEST Checkin.add", () => {

    it("add a checkin", () => {

        let checkinDetail = { venueId: "52663aa3498ebda21a68cb6e" }
        let addCheckin = checkin.add(checkinDetail)

        return addCheckin.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'checkin')
        })
    })
})

describe("TEST Checkin.recent", () => {

    it("retrieves a list of recent checkins", () => {

        let ll              = { limit: 20 }
        let recentCheckins  = checkin.recent(ll)

        return recentCheckins.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'recent')
        })
    })
})

describe("TEST Checkin.like", () => {

    it("likes a checkin", () => {

        let recentCheckins  = checkin.like()

        return recentCheckins.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'likes')
        })
    })
})

describe("TEST Checkin.like", () => {

    it("likes a checkin", () => {

        let recentCheckins  = checkin.like()

        return recentCheckins.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'likes')
        })
    })
})

describe("TEST Checkin.likes", () => {

    it("returns a list of likes for a checkin", () => {

        let likes  = checkin.likes()

        return likes.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'likes')
        })
    })
})

describe("TEST Checkin.likes", () => {

    it("returns a list of likes for a checkin", () => {

        let likes  = checkin.likes()

        return likes.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'likes')
        })
    })
})

describe("TEST Checkin.addPost", () => {

    it("add a post to the checkin", () => {

        let newPost  = { text: "Awesome" }
        let addPost  = checkin.addPost(newPost)

        return addPost.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'post')
        })
    })
})

describe("TEST Checkin.addComment", () => {

    it("adds a comment to the checkin", () => {

        let comment     = { text: "Awesome" }
        let addComment  = checkin.addComment(comment)

        return addComment.then( data => {
            console.log(data.response.comment.id)
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'comment')
        })
    })
})

describe("TEST Checkin.deleteComment", () => {

    xit("deletes a comment from a checkin", () => {

        let commentId = {commentId: "58510d462896a26db25bb8aa"}
        let deleteComment = checkin.deleteComment(commentId)

        return deleteComment.then( data => {
                assert.equal(data.meta.code, 200)
                assert.property(data.response, 'checkin')
            })
    })
})
