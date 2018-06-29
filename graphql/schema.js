// Fields exposed to client
const {buildSchema} = require('graphql')

module.exports.schema = buildSchema(`
  type Query {
    hello: String
    events: [Event]
  }
  type Event {
    attendees: Int
    category: String
    date: Int
    description: String
    host: String
    hostid: ID
    image_url: String
    location: Loc
    name: String
  }
  type Loc {
    lat: Float
    lon: Float
  }
  type Mutation {
    joinEvent (
      id: ID!
    ): Event
  }
`)
