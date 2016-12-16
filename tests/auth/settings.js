const chai          = require('chai')
const assert        = chai.assert
const Settings      = require('../../index').Settings
const client        = require('../config').authClient
const settings      = new Settings(client)

describe("TEST Settings.getDetails", () => {

    it("returns a list of details for a particular setting", () => {

        let getSettingDetails = settings.getDetails("receivePings")

        return getSettingDetails.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'value')
        })
    })
})

describe("TEST Settings.all", () => {

    it("returns a list of all available settings", () => {

        let allSettings = settings.all()

        return allSettings.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'settings')
        })
    })
})

describe("TEST Settings.set", () => {

    it("sets a setting", () => {

        let payload     = { value: 0 }
        let setSetting  = settings.set("receivePings", payload)

        return setSetting.then( data => {
            assert.equal(data.meta.code, 200)
            assert.property(data.response, 'settings')
            assert.isFalse(data.response.settings.receivePings)
        })
    })
})
