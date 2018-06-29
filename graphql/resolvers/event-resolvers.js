const {database} = require('../../database/firebase')

// fetchEvent for Event items
const getEvents = () => {
    return database.ref("/events/").once("value").then((snapshot) => {
        const events = snapshot.val()
        // NOTE: might need to check for fetch success before proceeding
        return events
    });
}
  
const getEvent = (id) => {
    return database.ref("/events/" + id).once("value").then((snapshot) => {
        let event = { ...snapshot.val(), id };
        return event
    });
}

const attendEvent = ({input: event, id}) => {
    const updated_event = {
        ...event,
        attendees: event.attendees + 1
    }
    // NOTE: might need to check for update success before returning
    // - Needs to be put in transaction to prevent concurrent writes?
    // https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions
    database.ref("/events/" + id).set(updated_event);
    return updated_event
}

module.exports = {
    events: getEvents,
    event: getEvent,
    attendEvent,
}
