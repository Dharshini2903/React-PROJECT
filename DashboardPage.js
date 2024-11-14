import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './DashboardPage.css'; 

const DashboardPage = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        
        console.log("User logged out");
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Welcome, User!!</h1>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </header>
            
            <div className="dashboard-content">
                <div className="option-card">
                    <h2>Generate Invoice</h2>
                    <p>Create and manage invoices with ease.</p>
                    <Link to="/generate-invoice">
                        <button className="cta-button">Generate Invoice</button>
                    </Link>
                </div>
                <div className="option-card">
                    <h2>Track Expenses</h2>
                    <p>Monitor and track your expenses efficiently.</p>
                    <Link to="/track-expenses">
                        <button className="cta-button">Track Expenses</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
