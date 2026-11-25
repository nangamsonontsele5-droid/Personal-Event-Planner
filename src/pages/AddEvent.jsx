import { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';

function AddEvent() {
    const { addEvent } = useContext(EventContext);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            id: Date.now(),  // Every event will have its own id based on the current date and time.
            name: name,
            date: date,
            time: time,
            description: description,
            location: location
        };

        addEvent(newEvent);
        // Reset form after submission
        setName('');
        setDate('');
        setTime('');
        setDescription('');
        setLocation('');
    };
 
 return (
    <form onSubmit={handleSubmit}>
        <label> Event Name </label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        <label> Date </label>
        <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
        <label> Time </label>
        <input type="time" required value={time} onChange={(e) => setTime(e.target.value)} />
        <label> Description </label>
        <textarea required value={description} onChange={(e) => setDescription(e.target.value)} />
        <label> Location </label>
        <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

        <button type="submit">Add Event</button>
    </form>
    );
}

export default AddEvent;
