class Settings {

    constructor(client) {
        this.client = client
    }

    getDetails(settingId) {
        return this.client.GET(`/settings/${settingId}`)
    }

    all() {
        return this.client.GET(`/settings/all`)
    }

    set(settingId, body) {
        return this.client.POST(`/settings/${settingId}/set`, body)
    }
}

module.exports = Settings
