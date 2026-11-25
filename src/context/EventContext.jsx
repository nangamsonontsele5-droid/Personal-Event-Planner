import { createContext, useState } from 'react';

const EventContext = createContext();
// Creates a context for event data and provides a way to manage and share event information across components.

const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    // Initializes the events state as an empty array and provides a function to update it.

    const addEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        // Adds a new event to the events state by adding it to the existing array of events.
    };

    const updateEvent = (updatedEvent) => {
        setEvents((prevEvents) =>

            // Goes through every event in array and checks if the current event is the one being edited. If it is, it replaces it with the updated event; if not, it keeps the original event.
            prevEvents.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
        );
    };

    const deleteEvent = (eventId) => {
    setEvents((prevEvents) =>

        // Filters out the event that matches the id of the event to be deleted, effectively removing it from the events state.
        prevEvents.filter((event) => event.id !== eventId)
    );
};

    return (
        <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
            {children}
        </EventContext.Provider>
    );
};

export { EventContext, EventProvider };