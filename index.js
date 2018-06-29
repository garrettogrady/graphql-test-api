require('dotenv').config();
const {buildSchema} = require('graphql')
const server = require('express-graphql')
const CORS = require('micro-cors')()

const {database} = require('./firebase')

const schema = buildSchema(`
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
`)


// fetchEvent for Event items
const getEvents = () => {
  return database.ref("/events/").once("value").then((snapshot) => {
    const events = snapshot.val()
    // console.log('events...', events)
    return events
  });
}

const getEvent = (id) => {
  return database.ref("/events/" + id).once("value").then((snapshot) => {
    let event = { ...snapshot.val(), id };
    return event
  });
}

// joinEvent
// database.ref("/events/" + this.state.event.id).set(event);


const rootValue = {
  hello: () => 'Wassup',
  events: getEvents,
  event: getEvent,
}

// TODO: disable graphiql in production
module.exports = CORS(server({ schema, rootValue, graphiql: true }))

