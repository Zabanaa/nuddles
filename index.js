const Nuddles       = require('./nuddles')
const credentials   = require('./credentials')

const nuddles = new Nuddles({
    clientId: credentials.clientId, 
    clientSecret: credentials.clientSecret 
})
