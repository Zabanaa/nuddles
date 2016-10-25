const Nuddles = require('./nuddles')

const nuddles = new Nuddles({
    clientId: "my_id", 
    clientSecret: "my_client_secret"
})

console.log(nuddles)
nuddles.shout()
