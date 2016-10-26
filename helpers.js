let objectRequired = () => {
    throw new Error("An object must be passed")
}

let urlSerialise = (queryParams) => {
    
    let queryString = [] 

    for(let key in queryParams) {
        queryString.push( key + "=" + queryParams[key] )
    }

    queryString.splice(queryString.length, 0, "v=20161026")
    
    return queryString.join('&')
}

module.exports = {
    urlSerialise: urlSerialise,
    objectRequired: objectRequired
}
