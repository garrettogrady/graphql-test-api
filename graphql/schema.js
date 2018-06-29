// Fields exposed to client
const {buildSchema} = require('graphql')

module.exports.schema = buildSchema(`
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
    input EventInput {
        attendees: Int
        category: String
        date: Int
        description: String
        host: String
        hostid: ID
        image_url: String
        location: LocInput
        name: String
    }
    type Loc {
        lat: Float
        lon: Float
    }
    input LocInput {
        lat: Float
        lon: Float
    }
    type Query {
        events: [Event]
    }
    type Mutation {
        attendEvent (
            input: EventInput
            id: ID!
        ): Event
    }
`)
