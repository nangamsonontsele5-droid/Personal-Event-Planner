import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom'; 
import Register from './pages/Register';
import Login from './pages/Login';
import { EventProvider } from './context/EventContext';
import AddEvent from './pages/AddEvent';
import Help from './pages/Help';
import './App.css';

function App() {
  return (
    <UserProvider>
      <EventProvider>
        <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/help" element={<Help />} />
      </Routes>

      </EventProvider>
    </UserProvider>
  );
}

export default App;