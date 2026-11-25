import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { setRegisteredUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();


    // Checks whether any field is empty and alerts the user to fill in all fields
    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields!');
        return;
    }
    
    // Checks whether the passwords match and alerts the user if they don't
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const isValidPassword =
        password.length >= 8 &&
        /[A-Z]/.test(password) && // At least one uppercase letter
        /[a-z]/.test(password) && // At least one lowercase letter
        /[0-9]/.test(password) && // At least one number
        /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character

        if (!isValidPassword) {
            alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }
    
    const newUser = {
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        username,
        email,
        password
    };

    setRegisteredUser(newUser);

    alert('Registration successful!');
    navigate('/login');
    };

    return (
        <main>
            <h2>Create Your Account</h2>

            {/* Form fields for user registration */}
            <form onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />  

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit">Register</button>
            </form>
        </main>
    )
}

export default   Register;