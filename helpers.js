const nets = require('nets')

const checkIsObject = (arg) => {
    if (typeof arg !== "object"){
        throw new Error("An object must be passed")
    }
}

const urlSerialise = (queryParams) => {
    
    checkIsObject(queryParams) 

    let queryString = [] 

    for(let key in queryParams) {
        queryString.push( key + "=" + queryParams[key] )
    }

    queryString.splice(queryString.length, 0, "v=20161026")
    
    return queryString.join('&')
}

const makeRequest = (options) => {
   
    return new Promise( (resolve, reject) => {
       
        nets(options, (err, response, body) => {

            if (response.statusCode >= 200 && response.statusCode <= 299) {
                
                resolve(JSON.parse(body))

            } else {
                
                reject("Error! The server responded with a status code of " + response.statusCode + " and sent the following message: " + response.statusMessage)

            }

        })
    })
}

module.exports = {
    urlSerialise: urlSerialise,
    checkIsObject: checkIsObject,
    makeRequest: makeRequest

}

