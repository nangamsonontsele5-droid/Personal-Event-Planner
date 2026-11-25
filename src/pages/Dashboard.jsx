import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';

function Dashboard() {
  const { events, updateEvent, deleteEvent } = useContext(EventContext);
  const [editingEvent, setEditingEvent] = useState(null);
  const [deletingEvent, setDeletingEvent] = useState(null);

  return (
    <main>
      <div className="dashboard-intro">
        <h2>Welcome to your Dashboard!</h2>
        <p>Keep track of your upcoming events and tasks.</p>
      </div>

        <h3 className="section-heading">Your Upcoming Events</h3>
        
        {/** If editingEvent has a value, display the following form. */}
        {editingEvent && (
          <form onSubmit={(e) => {
            e.preventDefault();
            updateEvent(editingEvent);
            setEditingEvent(null);
          }}>
            <h3>Edit Event</h3>
            <label>Event Name:</label>
            <input
              type="text"
              value={editingEvent.name}
              onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
            />
            <label>Date:</label>
            <input
              type="date"
              value={editingEvent.date}
              onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
            />
            <label>Time:</label>
            <input
              type="time"
              value={editingEvent.time}
              onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })}
            />
            <label>Description:</label>
            <textarea
              value={editingEvent.description}
              onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
            />
            <label>Location:</label>
            <input
              type="text"
              value={editingEvent.location}
              onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
            />
            <button type="submit">Update Event</button>
          </form>
        )}

        {/** If deletingEvent has a value, display the following confirmation message. */}
        {deletingEvent && (
          <div className="delete-confirmation">
            <p>Are you sure you want to delete the event "{deletingEvent.name}"?</p>
            <button onClick={() => {
              deleteEvent(deletingEvent.id);
              setDeletingEvent(null);
            }}>Yes, Delete</button>
            <button onClick={() => setDeletingEvent(null)}>Cancel</button>
          </div>
        )

        }

      <div className="events-container">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h4>{event.name}</h4>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Description: {event.description}</p>
            <p>Location: {event.location}</p>
            <button onClick={() => setEditingEvent(event)}>Edit</button>
            <button className="delete-button" onClick={() => setDeletingEvent(event)}>Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Dashboard;