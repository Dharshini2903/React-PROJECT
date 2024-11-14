// // SignupPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';

// const SignupPage = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Check if user already exists
//             const response = await fetch('http://localhost:5000/users?email=' + formData.email);
//             const existingUser = await response.json();

//             if (existingUser.length > 0) {
//                 setError('User with this email already exists');
//                 return;
//             }

//             // Add the new user to the db.json
//             const newUser = await fetch('http://localhost:5000/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (newUser.ok) {
//                 navigate('/dashboard');
//             } else {
//                 setError('Failed to sign up. Please try again.');
//             }
//         } catch (err) {
//             setError('An error occurred. Please try again later.');
//         }
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-form signup-form">
//                 <h2>Sign Up</h2>
//                 {error && <p className="error">{error}</p>}
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="signup-email">Email</label>
//                     <input
//                         type="email"
//                         id="signup-email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <label htmlFor="signup-password">Password</label>
//                     <input
//                         type="password"
//                         id="signup-password"
//                         name="password"
//                         placeholder="Enter your password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <button type="submit" className="cta-button">Sign Up</button>
//                     <p>Already have an account? <a href="/login">Login</a></p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignupPage;
// SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignupPage = () => {
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
            const existingUser = await response.json();

            if (existingUser.length > 0) {
                setError('User with this email already exists');
                return;
            }

            const newUser = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) 
            });

            if (newUser.ok) {
                navigate('/login'); 
            } else {
                setError('Failed to sign up. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form signup-form">
                <h2>Sign Up</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="signup-email">Email</label>
                    <input
                        type="email"
                        id="signup-email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="signup-password">Password</label>
                    <input
                        type="password"
                        id="signup-password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="cta-button">Sign Up</button>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
