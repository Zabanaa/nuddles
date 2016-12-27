# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](changelog) and this project adheres to [Semantic Versioning](semver)

=========


## 2.0.0 2016-12-27

### Added

- Class ids are no longer required upon instantiation
- Event.getCategories
- Event.search
- Venue.search
- Venue.getTrending
- Venue.explore
- Venue.getCategories

### Removed

- Venue.getSpecialDetails
- Nuddles.getEventCategories
- Nuddles.searchEvents
- Nuddles.searchVenues
- Nuddles.getTrendingVenues
- Nuddles.exploreVenues
- Nuddles.getVenueCategories
- Nuddles.getTipLikes
- Nuddles.getTipLists
- Nuddles.getTipSaves
- Nuddles.getCheckinLikes

## 1.3.2 2016-12-2

### Added

- Client.userless changed to Client.authenticated to make the code easier to reason about

## 1.3.0 2016-12-19

### Added

- User class
- Setting class
- Special class
- Photo class
- Tip class
- Checkin class

## 1.2.0 2016-12-10

### Added

- oAuth2 authentication flow
- support for protected endpoints '/lists' endpoints
- listId is now an optional argument for all of nuddles.List's methods

## 1.1.0 2016-12-08

### Added

- Nuddles.getCheckinLikes method
- Nuddles.getTipLikes method
- Nuddles.getTipSaves method
- Nuddles.getTipLists method

## 1.0.1 2016-12-07

## Changed

- Refactor the codebase to use ES6 Classes instead of traditional ES5 prototype pattern

[changelog]: http://keepachangelog.com/en/0.3.0/
[semver]: http://semver.org/
