# Todo:

-   oAuth2 web application flow

## User

__All endpoints accept an optional userId argument. If not specified, the request will be
made on behalf of the acting user__

### Aspects

- User.search()         GET OR POST
- User.requests()       GET
- User.venueHistory()   GET
- User.photos()         GET
- User.tastes()         GET
- User.friends()        GET
- User.checkins()       GET
- User.tips()           GET
- User.venueLikes()     GET
- User.mayorships()     GET
- User.lists()          GET

### Actions

- User.approveFriendRequest()   POST
- User.denyFriendRequest()      POST
- User.setPingNotifications()   POST
- User.updateProfilePicture()   POST
- User.unfriendUser()           POST

## Venues

- Venue.getTimeSeriesData()     GET
- Venue.add()                   POST
- Venue.getManaged()            GET

### Aspects
- Venue.getSimilar()            GET
- Venue.hereNow()               GET
- Venue.getStats()              GET (Must be the manager)

### Actions
- Venue.dislike()               POST
- Venue.flag()                  POST
- Venue.proposeEdit()           POST
- Venue.like()                  POST
- Venue.claim()                 POST (Must be the manager)
- Venue.setRole()               POST (Must be the maanger)
- Venue.setSingleLocation()     POST (Must be the manager)
- Venue.edit()                  POST (Must be the manager OR a superuser)
