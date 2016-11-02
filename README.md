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

To use Nuddles in your project you first need to import it and instantiate a new object.

```javascript
    const Nuddles       = require('nuddles')
    const client        = new Nuddles({
                    clientId: "your client id",
                    clientSecret: "your client secret"
            })
```

Every new Nuddles object must be instantiated with both your `clientId` and `clientSecret`,
you can also specify an optional api version if you wish to (it currently defaults to
`20161026`)

```javascript
const client = new Nuddles({
            clientId: "your client id",
            clientSecret: "your client secret",
            apiVersion: "YYYYMMDD"
        })
```

[1]: https://developer.foursquare.com/
