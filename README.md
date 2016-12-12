# Nuddles

Nuddles is a Node.js wrapper for the foursquare API.
It will enable you to effortlessly query their multiple endpoints.
We make no assumptions about how you are going to use it, we just return the data to
you. You are free do manipulate the results as you wish.

## Requirements

Before you can start using Nuddles, please make sure you have your access tokens ready. If you
don't know how to aquire them, you can simply head over to the [foursquare developers
site][1], click "create new app" and follow the instructions. Foursquare will provide you with
a `clientId` and a `clientSecret` token that you will need to query the API.


## Installation

```bash
$ npm install nuddles --save
```

_Depending on your setup, you may need sudo privileges_

## Usage

### Userless Access

To use Nuddles in your project, you first need to import it and instantiate a new `Client` object.

```javascript
const nuddles       = require('nuddles')
const client        = new nuddles.Client({
        clientId: "your client id",
        clientSecret: "your client secret"
})
```

Every new `Client` object must be instantiated with both your `clientId` and `clientSecret`,
you can also specify an optional api version if you wish to (it currently defaults to
`20161026`)

```javascript
const client = new Nuddles({
    clientId: "your client id",
    clientSecret: "your client secret",
    apiVersion: "YYYYMMDD"
})
```

### Authenticated requests

The setup above is perfectly fine for making requests to Foursquare's publicly accessible
endpoints. However if you need to access protected endpoints that require acting users,
you must first authenticate them using the OAuth2 flow.

**Step 1: Instantiate a new `nuddles.Client` object**
```javascript
const client = new Nuddles({
    clientId: "your client id",
    clientSecret: "your client secret",
    apiVersion: "YYYYMMDD", // optional
    redirectUri: "your redirect uri"
})

```
Notice that we pass a `redirectUri` attribute to the config. It must match the
redirect uri you set when creating the app on the foursquare developer's site.

**Step 2: Create an authorization link / button for your users**

```javascript
const authorizationUrl = client.auth_url
// Render this url as a link / button in your front end app
```

**Step 3: Request an access token**

Once your users click on the link and give your app authorization to use their account on
their behalf, they will be redirected to your `redirectUri`.

An authorization code will be passed along as a query parameter. You will need to capture that code and store it in a
variable.

```javascript

// Example using express
let authorizationCode

app.get('/redirectUri', (req, res) => {
   authorizationCode = req.query.code
})

```

Once you have that code you can request an access token to Foursquare

```javascript

client.requestAccessToken(authorizationCode)
    .then( data => console.log(data.accessToken) ) // Make note of this token
    .catch( error => console.error(error) ) // Handle the error

```

**Step 4: Set your access token**

```javascript
client.accessToken = "yourSavedAccessToken"

```

__Ideally you'd want to store your credentials in a separate config file ignored by
version control or in environment variables__

**Set your acccess token directly**

Alternatively, if you already have an access token, you can just skip step 1 to 4 and
directly instantiate a client with your accessToken.

```javascript
const client = nuddles.Client({
    accessToken: "your access token"
})
```

Nuddles also exposes two other classes: `Venue` and `List`. Use them to retrieve info
about a specific venue or list.

Each respectively accept a `venueId` and a `listId` along with the client instance to inherit from as arguments.

###Venue

```javascript

const client = new nuddles.Client({clientId: "your client id", clientSecret:"your client secret"})

// Venue
const venue = new nuddles.Venue(client, "someVenueId")

// List
const list = new nuddles.List(client, "someListId")

```

## Examples

_Please  note that all methods return promises, which means you will have to call `.then()` to manipulate the response_

All methods that accept a `params` argument should be passed an object with a list of
query parameters for your request, these parameters should match the ones listed in the
[official documentation.][2]

### Search Venues

```javascript
client.searchVenues({ near: 'Paris, France', query: 'pizza' }) // Your other query params here
    .then( (data) => {
        // Do something with the response
    })
```

### Get a Venue's Opening Hours

```javascript

venue.getOpeningHours()

```

### Get a List's Followers
```javascript
list.getFollowers()
```

## Full list of methods

### All Venues

[Docs][3]

```javascript
client.searchVenues(params)
client.suggestCompletion(params)
client.getVenueDetail(venueId) (will be deprecated)
client.getVenueCategories()
client.getTrendingVenues(params)
client.exploreVenues(params)
client.searchSpecials(params)
client.searchEvents(params)
client.getEventCategories()
client.getTipLikes()
client.getTipLists()
client.getTipSaves()
client.getCheckinLikes()

```
### Venue

[Docs][3] _look under `aspects`_

```javascript
venue.getDetails()
venue.getPhotos()
venue.getEvents()
venue.getLikes()
venue.getNextVenues()
venue.getOpeningHours()
venue.getThirdPartyLinks()
venue.getMenu()
venue.getTips()
venue.getLists()
venue.getSpecialDetails(specialId)
```


### List

[Docs][4]

```javascript
list.getFollowers()
list.getSaves()
list.getDetails()
list.add()
list.update()
list.share()
list.requestSuitableTips()
list.requestSuitablePhotos()
list.requestSuitableVenues()
list.addItem()
list.updateItem()
list.deleteItem()
list.moveItem()
list.getItemDetails()
list.follow()
list.unfollow()
```

## Testing
In order to run the tests:

- rename the `credentials.example.js` file to `credentials.js`
- fill in your personal credentials
- run `npm test`

## Contributing
Nuddles is a work in progress and an open source project. If you spot something that can
be improved, or find a better way to achieve the same functionality, please feel free to
add your contribution by way of a pull request.

## License
Nuddles is licensed under the Do What The Fuck You Want license.

## Todo
- [ ] Add support for user related endpoints (Settings, Tips, Updates, Photos, Users ...)


[1]: https://developer.foursquare.com/
[2]: https://developer.foursquare.com/docs/
[3]: https://developer.foursquare.com/docs/venues/venues
[4]: https://developer.foursquare.com/docs/lists/lists
