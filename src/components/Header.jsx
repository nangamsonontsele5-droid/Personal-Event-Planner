import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';


function Header() {
    const { user, isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext);
    // Accesses the user data and login status from the UserContext.

    const message = isLoggedIn ? `Welcome, ${user.name}!` : 'Please log in.';
    
    const handleLogout = () => {
        // Clear user data and update login status
        setUser(null);
        setIsLoggedIn(false);
    };
     
    return (
        <header>
            <h1>Personal Event Planner</h1>
            {isLoggedIn ? (
                <div>
                    <p>{message}</p>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/add-event">Add Event</Link>
                    <Link to="/help">Help</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </header>
    );
}   

export default Header;