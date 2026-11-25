import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { registeredUser, setUser, setIsLoggedIn } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        if(!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Checks if a registered user already exists in the context
        if (!registeredUser) {
            alert('No registered user found. Please register first.');
            return;
        }


        // Checks if the entered email and password match the registered user's credentials
        if (email !== registeredUser.email || password !== registeredUser.password) {
            alert('Invalid email or password. Please try again.');
            return;
        }

        // If the credentials match, set the user and update the login status
        setUser(registeredUser);
        setIsLoggedIn(true);

        alert('Login successful!');
        navigate('/dashboard');
    }

    return (
        <main>
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Login</button>
            </form>
        </main>
    );
}

export default Login;