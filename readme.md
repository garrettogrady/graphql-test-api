# People's Protest GraphQL Test API

### Notes:

**To run**
```
npm i
npm run dev
```

The above starts a local server on `localhost:3000`
[It will be an instance of graphiql client.](https://github.com/graphql/graphiql)


**Required if developing**

Create a `.env` file with the required Firebase app keys/values.
Later we can maybe check this into source control if our repo is private.


===
### Sample

#### Query:

Fetch all events with certain fields specified:
```
query CheckEvents {
  events {
    name
    hostid
    host
    description
    location {
      lat
      lon
    }
    attendees
  }
}
```

#### Mutation:

Incrementing attendee count for Event item:
```
mutation TestAttendEvent($event: EventInput!, $id: ID!) {
  attendEvent(input: $event, id: $id) {
    name
    attendees
  }
}
```
with these values sent under "Query Variables"
```
{
  "event": {
    "name": "Learn About Forest Fires",
    "hostid": "4",
    "host": "GreenPeace",
    "description": "Join the event to learn about causes of forest fires. The event will also teach you about safety measures you must take in the event of the disaster.",
    "location": {
      "lat": 33.988599,
      "lon": -118.439054
    },
    "attendees": 0
  },
  "id": 1
}
```

===

### Modifying the schema

When updating/adding to schema follow:
https://graphql.org/learn/schema/

Resolvers for new Types can go into `graphql/resolvers` under its own file.
Then just import into `graphql/resolvers/index.js`.

When ready to deploy just run:
```
npm run deploy
```

which will make the latest version of this test api live at

https://pp-api-test.now.sh/

