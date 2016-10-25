const Nuddles = function (credentials) {
    if (typeof credentials !== "object") {
        throw new Error("You have to pass an object")
    }

    let credentials_keys = Object.keys(credentials)
    if ( !credentials_keys.includes("clientId") || !credentials_keys.includes("clientSecret") ){
        throw new Error("The config object takes a clientId and a clientSecret")
    } else {
        this.clientId       = credentials.clientId
        this.clientSecret   = credentials.clientSecret
    }
    this.url = "http://api.foursquare.com"
    this.version = "20161024"

} 

Nuddles.prototype.callApi = (queryParams) => {

    // Loop through the query params 
    // make the call to the API
}

module.exports = Nuddles 
    
