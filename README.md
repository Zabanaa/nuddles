# Nuddles

Nuddles is a Node.js wrapper for the foursquare API.
It will enable you to effortlessly query their multiple endpoints.
We make no assumptions about how you are going to use it, we just return the data to
you. You are free do manipulate the results as you wish.

_Please note that Nuddles currently only supports userless access but plans to add OAuth
authentication are in the pipeline._

## Requirements

Before you can start using Nuddles, please make sure you have your access tokens ready. If you
don't know how to aquire those, you can simply head over to the [foursquare developers
site][1], click "create new app" and follow the instructions. Foursquare will provide you with
a `clientId` and a `clientSecret` token that you will need to query the API.


## Installation

```bash
$ npm install nuddles
```

_Depending on your setup, you may need sudo privileges_

## Usage

To use Nuddles in your project you first need to import it and instantiate a new `Client` object.

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

Nuddles also exposes two other classes: `Venue` and `List`. Use them to retrieve info
about a specific venue or list. Each respectively take a `venueId` and a `listId` as their
only arguments.

###Venue

```javascript
const venue = new nuddles.Venue("someVenueId")
```

###List

```javascript
const list = new nuddles.List("someListId")
```

## Examples

_Please  note that all methods return promises, which means you will have to call `.then(0)` to manipulate the response_

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

```
### Venue
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
```javascript
list.getFollowers()
list.getSaves()
list.getDetails()
```

## Testing
In order to run the tests:

- rename the `credentials.example.js` file to `example.js`
- fill in your personal credentials
- run `npm test`

## Contributing
Nuddles is a work in progress and an open source project. If you spot something that can
be improved, or find a better way to achieve the same functionality, please feel free to
add your contribution by way of a pull request.

## License
Nuddles is licensed under the Do What The Fuck You Want licence.

## Todo
- [ ] Add OAuth authentication
- [ ] Add support for user related endpoints


[1]: https://developer.foursquare.com/
