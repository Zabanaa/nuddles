const Nuddles = function (credentials) {

    if (typeof credentials === "object") {
        
        if (!credentials.clientId || !credentials.clientSecret){
            throw new Error("Missing required fields. Please refer to the documentation.")
        } 

        this.clientId       = credentials.clientId
        this.clientSecret   = credentials.clientSecret
    }

    else {
        throw new Error("You have to pass an object")
    }

} 

Nuddles.prototype.callApi = (queryParams) => {
    
    const apiVersion = "20161025"

    let options = {
        'host': 'api.foursquare.com',
        'method': 'GET',
        'port': 443,
        // Loop through the query params and create a path string
        // lookup how to add query params
    }

    // make the call to the API
}

module.exports = Nuddles 
    
