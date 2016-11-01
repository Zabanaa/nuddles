# Endpoints

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
    Nuddles.searchSpecials(params) !DONE!
    Nuddles.searchEvents(params) !DONE!
    Nuddles.getEventCategories() !DONE!
```

# Aspects Methods (that pertain to a single venue)
For this to work we will need to create a new Venue constructor that inherits from the
base class. It will have the same clientId and Secret.
And also a shared method for calling the api

Here's a list of all the aspect methods we will create (limited to userless action)

- The Venue constructor will take an id
- Venue.getDetails() !DONE!
- Venue.getPhotos()  !DONE!
- Venue.getEvents()  !DONE!
- Venue.getLikes()   !DONE!
- Venue.getNextVenues() !DONE!
- Venue.getOpeningHours() !DONE!
- Venue.getThirdPartyLinks() !DONE!
- Venue.getMenu() !DONE!
- Venue.getTips() !DONE!
- Venue.getLists()!DONE!
- Venue.getSpecialsId(specialId) !DONE!

## Lists

    Create a List Class
    Link to docs: https://developer.foursquare.com/docs/lists/lists

    - [X] List.getDetails()
    - [X] List.getFollowers()


## Todo

**Nuddles**

    Link to docs: https://developer.foursquare.com/docs/specials/

    - [X] Nuddles.searchSpecials(params)

    Link to docs: https://developer.foursquare.com/docs/events/events

    - [X] Nuddles.searchEvents(params)
    - [X] Nuddles.getEventCategories()

**Venues (required acting user)**

    - [  ] Nuddles.getDailyVenueStats() `/venues/timeseries`    (must be the manager)
    - [  ] Nuddles.managedVenues()      `/venues/managed`       (must be the manager)
    - [  ] Nuddles.addVenue()           `/venues/add`

**Individual venue (requires acting user)**

    - [  ] Venue.getSimilar() `/venues/VENUE_ID/similar`
    - [  ] Venue.getStats()   `/venues/VENUE_ID/stats` (must be the manager)

**List**
    _requires acting user_
    - [  ] List.suggestVenues()
    - [  ] List.suggestPhoto()
    - [  ] List.suggestTip()
    - [  ] List.getItemDetails()

**Updates (requires acting user)**

- [ ] /updates
- [ ] /updates/ID

**Photos (requires acting user)**

- [  ] /photos/add

**Settings (required acting user)**

- [ ] /settings/all
- [ ] /settings/ID
- [ ] /settings/ID/set

# Nuddles








