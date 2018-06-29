const {database} = require('../database/firebase')

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

const attendEvent = (event, id) => {
    updated_event = {
        ...event,
        attendees: event.attendees + 1
    }
    // event['attendees'] += 1;
    database.ref("/events/" + id).set(updated_event);
    return updated_event
}

module.exports.rootValue = {
    hello: () => 'Wassup',
    events: getEvents,
    event: getEvent,
    attendEvent: attendEvent,
}
