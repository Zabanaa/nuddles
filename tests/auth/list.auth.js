const chai          = require('chai')
const assert        = chai.assert
const List          = require('../../index').List
const client        = require('../config').authClient
console.log(client)
const myList        = new List(client, "584c01290393cc2b62a8f669")

describe(" TEST client.POST", () => {

    it("just works init", () => {

        let addList = client.POST('/lists/add', {name:"bruv list"})
        return addList.then( response => {
            assert.equal(response.meta.code, 200)
        })
    })

})

describe(" TEST List.add ", () => {

    it("adds a new list to the user account", () => {

        let newList = {
            name: "My Cool List",
            description: "The coolest list ever bruv",
            collaborative: true
        }

        let addList = myList.add(newList)
        return addList.then( data => {
            let body = data.response
            assert.equal(data.meta.code, 200)
            assert.property(body, 'list')
            assert.equal(body.list.name, newList.name.replace(/\s/g, ""))
            assert.equal(body.list.description, newList.description.replace(/\s/g, ""))
            assert.equal(body.list.type, "created")
        })

    })

})

describe(" TEST List.update ", () => {

    it("updates a currently existing list", () => {

        let list = { description: "riyadmahrezbruuuv" }

        let updateList = myList.update(list)

        return updateList.then( data => {
            let body = data.response
            assert.equal(data.meta.code, 200)
            assert.property(body, 'list')
            assert.equal(body.list.description, list.description)
        })
    })
})

describe(" TEST List.share ", () => {

    xit("Share a list", () => {

        let shareInfo  = {broadcast: 'twitter', message: "Blud, you've got to check out this list."}
        let shareList = myList.share(shareInfo)

        return shareList.then( data => {
            let body = data.response
            assert.equal(data.meta.code, 200)
        })
    })
})

describe(" TEST List.addItem ", () => {

    before( done => {
        myList.deleteItem({venueId: "4c8e593958668cfa2349d1ec" })
            .then( data => done() )
            .catch( err => { console.error(err); done() } )
    })

    it("Adds an item to the list (in this case a venue)", () => {

        let details     = { venueId: "4c8e593958668cfa2349d1ec" }
        let addItem     = myList.addItem(details)

        return addItem.then( data => {
            let body = data.response
            assert.equal(data.meta.code, 200)
            assert.property(body, 'item')
            assert.equal(body.item.id, "v" + details.venueId)
        })
    })
})

describe(" TEST List.updateItem ", () => {

    it("Updates a list item", () => {

        let details     = { itemId: "v4adcda14f964a520263721e3" }
        let updateItem  = myList.updateItem(details)

        return updateItem.then( data => {
            let body = data.response
            assert.equal(data.meta.code, 200)
            assert.property(body, 'item')
            assert.equal(body.item.id, details.itemId)
        })
    })
})

describe(" TEST List.deleteItem ", () => {

    before( done => {

        myList.addItem({venueId: "4d5abf6756f2b60ce865872f"})
            .then( () => done() )
            .catch( err => { console.error(err); done() })
    })

    it("deletes an item", () => {
        return myList.deleteItem({venueId: "4d5abf6756f2b60ce865872f"})
        .then( data => {
            let body = data.response
            assert.property(body, 'items')
        })
        .catch( err => console.error(err) )

    })

})

describe(" TEST List.moveItem ", () => {

    it("moves an item inside a list", () => {
        let details = { itemId: "v4bc41cc94cdfc9b6d9449821", afterId: "v4c8e593958668cfa2349d1ec"}

        return myList.moveItem(details)
            .then( data => {
                let body = data.response
                assert.property(body, 'list')
            })
            .catch( err => console.error(err) )
    })

})

describe(" TEST List.getItemDetails ", () => {

    it("moves an item inside a list", () => {

        let itemId = "v4bc41cc94cdfc9b6d9449821"

        return myList.getItemDetails(itemId)
            .then( data => {
                let body = data.response
                assert.property(body, 'item')
                assert.equal(body.item.id, itemId)
            })
            .catch( err => console.error(err) )
    })
})

describe(" TEST List.follow ", () => {

    it("follows a list", () => {
        let listToFollow = "5002dcdae4b0004dbeb53994"
        return myList.follow(listToFollow)
            .then( data => {
                let body = data.response
                assert.property(body, 'list')
                assert.isTrue(body.list.following)
            })
            .catch( err => console.error(err) )
    })
})

describe(" TEST List.unfollow ", () => {

    it("unfollows a list", () => {
        let listToUnfollow = "5002dcdae4b0004dbeb53994"
        return myList.unfollow(listToUnfollow)
            .then( data => {
                let body = data.response
                assert.property(body, 'list')
                assert.isFalse(body.list.following)
            })
            .catch( err => console.error(err) )
    })
})

describe(" TEST List.requestSuitableVenues ", () => {

    it("returns a list of suggested venues", () => {
        return myList.requestSuitableVenues()
            .then( data => {
                let body = data.response
                assert.equal(data.meta.code, 200)
                assert.property(body, 'suggestedVenues')
                assert.isArray(body.suggestedVenues)
            })
            .catch( err => console.error(err) )
    })
})

describe(" TEST List.requestSuitablePhotos ", () => {

    it("returns a list of suggested photos", () => {

        let details = { itemId: "v4bc41cc94cdfc9b6d9449821" }

        return myList.requestSuitablePhotos(details)
            .then( data => {
                let body = data.response
                assert.equal(data.meta.code, 200)
                assert.property(body, 'photos')
                assert.property(body.photos, 'user')
                assert.property(body.photos, 'others')
            })
            .catch( err => console.error(err) )
    })
})

describe(" TEST List.requestSuitableTips ", () => {

    it("returns a list of suggested tips", () => {

        let details = { itemId: "v4bc41cc94cdfc9b6d9449821" }

        return myList.requestSuitableTips(details)
            .then( data => {
                let body = data.response
                assert.equal(data.meta.code, 200)
                assert.property(body, 'tips')
                assert.property(body.tips, 'user')
                assert.property(body.tips, 'others')
            })
            .catch( err => console.error(err) )
    })
})
