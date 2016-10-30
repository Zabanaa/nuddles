# Endpoints

- /v2/venues/VENUE_ID (returns details about the venue)

- /v2/venues/search (ll, location, query, altitude, limit, radius, altitude accuracy, ll
  accuracy, ne, sw, categoryId, url, providerId, linkedId)

- /v2/venues/categories (No params)

- /v2/venues/trending ( ll, limit, radius)

- /v2/venues/explore (ll, location, llAcc, alttitude, altitudeAcc, radius, section, query,
  limit, offset, section (section invalidates the query if it's passed, there are tons of
  choices, just look em up), time, day, venuePhotos, openNow, sortByDistance, price (give
  a number), specials (boolean)) Novelty, friendsVisit, lastVenue, saved REQUIRE A LOGGED IN
  USER


The Nuddles constructor must be instatiated with a clientId and a clientSecret (show how
to get both)

```javascript
    const api = new Nuddles({clientid: clientId, clientSecret: clientSecret})
```

The class is able to make calls to the api thanks to this helper function
``` javascript
    Nuddles.callApi()
```

Here's a list of all the methods we will create
```javascript
    Nuddles.searchVenues(params) !DONE!
    Nuddles.suggestCompletion(params) !DONE!
    Nuddles.getVenueDetail(id) !DONE!
    Nuddles.getVenueCategories() !DONE!
    Nuddles.getTrendingVenues(ll OR Near) !DONE! // Required ll OR near Optional limit and radius
    Nuddles.exploreVenues(ll OR near) !DONE! // Required ll OR near Optional (see the docs) on the site
```

# Aspects Methods (that pertain to a single venue)
For this to work we will need to create a new Venue constructor that inherits from the
base class. It will have the same clientId and Secret.
And also a shared method for calling the api

Here's a list of all the aspect methods we will create (limited to userless action)

- The Venue constructor will take an id
- Venue.getPhotos()
- Venue.getEvents()
- Venue.getLikes()
- Venue.getNextVenues()
- Venue.getOpeningHours()
- Venue.getThirdPartyLinks()
- Venue.getMenu()
- Venue.getTips()
- Venue.getLists()

## Todo

**Venues (required acting user)**

- [  ] Nuddles.getDailyVenueStats() `/venues/timeseries`    (must be the manager)
- [  ] Nuddles.managedVenues()      `/venues/managed`       (must be the manager)
- [  ] Nuddles.addVenue()           `/venues/add`

**Individual venue (requires acting user)**

- [  ] Venue.getSimilar() `/venues/VENUE_ID/similar`
- [  ] Venue.getStats()   `/venues/VENUE_ID/stats` (must be the manager)








