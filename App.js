// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import GenerateInvoicePage from './GenerateInvoicePage';
import TrackExpensesPage from './TrackExpensesPage';
import { ExpensesProvider } from './ExpensesContext';  // Import the ExpensesProvider
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Wrap relevant routes in the ExpensesProvider */}
                <ExpensesProvider>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/generate-invoice" element={<GenerateInvoicePage />} />
                        <Route path="/track-expenses" element={<TrackExpensesPage />} />
                    </Routes>
                </ExpensesProvider>
            </div>
        </Router>
    );
}

export default App;
