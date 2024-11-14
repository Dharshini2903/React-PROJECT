
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = await fetch(`http://localhost:5000/users?email=${formData.email}`);
            const users = await response.json();

            if (users.length > 0 && users[0].password === formData.password) {
                navigate('/dashboard'); 
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form login-form">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="login-email">Email</label>
                    <input
                        type="email"
                        id="login-email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="login-password">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="cta-button">Login</button>
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
