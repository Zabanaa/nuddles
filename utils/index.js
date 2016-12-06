const nets = require('nets')

const validateConfig = config => {

  // Check that config is an object
  if (typeof config !== "object") {
    throw new Error("Config must be an object")
  }

  if (!config.clientId || !config.clientSecret) {
    throw new Error("Missing required fields. Please refer to the documentation")
  }

}

const required = (message) => {
   throw new Error(message)
}

const serialise = (params) => {

    // If the user passes a non empty object
    // Construct the queryString
    // Else, return an empty value

    if ( Object.keys(params).length != 0 ) {

        let queryString = []

        for(let key in params) {
            params[key]     = params[key].toString()
            queryString.push( key + "=" + params[key].replace(/\s/g, '') )
        }

        return queryString.join('&')

    }

    else { return "" }
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

module.exports = { serialise, makeRequest, required, validateConfig}
