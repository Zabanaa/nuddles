const Nuddles = function (credentials) {
    if (typeof credentials !== "object") {
        throw new Error("You have to pass an object")
    }

    if (!credentials.clientId || !credentials.clientSecret){
        throw new Error("Missing required fields. Please refer to the documentation.")
    } 

    this.clientId       = credentials.clientId
    this.clientSecret   = credentials.clientSecret
    this.url = "http://api.foursquare.com"
    this.version = "20161024"

} 

Nuddles.prototype.callApi = (queryParams) => {

    // Loop through the query params 
    // make the call to the API
}

module.exports = Nuddles 
    
