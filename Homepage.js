import React from 'react';
import { Link } from 'react-router-dom'; 
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <header className="header">
                <div className="logo">💥AccountingPro</div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact Us</a>
                </nav>
                <div className="auth-links">
                    <Link to="/login">
                        <button className="login-btn">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="signup-btn">Sign Up</button>
                    </Link>
                </div>
            </header>

            <section id="home" className="hero-section">
                <div className="hero-content">
                    <h1>UNLEASH YOUR FINANCES</h1>
                    <p>Step into the future of accounting with style and ease.</p>
                    <button className="cta-button">Explore Now</button>
                </div>
                <div className="hero-image">
                </div>
            </section>

            <section id="features" className="features-section">
                <h2>OUR FEATURES</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Expense Blaster</h3>
                        <p>Track your expenses with explosive precision and clarity. No more missing details!</p>
                    </div>
                    <div className="feature-card">
                        <h3>Report Generator X</h3>
                        <p>Create snazzy reports that not only inform but impress. Data has never looked this good.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Data Vault</h3>
                        <p>Your data is locked down tight with security that even a hacker's dream can't crack.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Automated Invoicing Magic</h3>
                        <p>Wave goodbye to manual invoices and let our magic wand do the heavy lifting for you.</p>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section">
                <h2>ABOUT US</h2>
                <p>We’re not your average accounting software team  our mission is to make managing your finances a wild, yet secure, ride.</p>
            </section>

            <section id="contact" className="contact-section">
                <h2>CONTACT</h2>
                <p>Want to join the fun or need help? Shoot us a message at <a href="mailto:support@accountingpro.com">support@accountingpro.com</a> or call (123) 456-7890.</p>
            </section>

            <footer className="footer">
                <p>&copy; 2024 AccountingPro. We're reliable than your average accounting system.</p>
            </footer>
        </div>
    );
};

export default Homepage;
