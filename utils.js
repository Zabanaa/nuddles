const nets = require('nets')

const checkIsObject = (arg) => {
    if (typeof arg !== "object"){
        throw new Error("An object must be passed")
    }
}

const required = (message) => {
   throw new Error(message)
}

const urlSerialise = (queryParams) => {

    let queryString = []

    for(let key in queryParams) {
        queryString.push( key + "=" + queryParams[key] )
    }

    return queryString.join('&')
}

const makeRequest = (options) => {

    return new Promise( (resolve, reject) => {

        nets(options, (err, response, body) => {

            let responseBody = JSON.parse(body)

            if (response.statusCode >= 200 && response.statusCode <= 299) {
                resolve(responseBody)
            } else {

                reject("Error! The server responded with a status code of " + responseBody.meta.code + " and sent the following message: " + responseBody.meta.errorDetail)
            }
        })
    })
}

module.exports = {
    urlSerialise: urlSerialise,
    checkIsObject: checkIsObject,
    makeRequest: makeRequest,
    required: required
}
