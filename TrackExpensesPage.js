
import React, { useState } from 'react';
import { useExpenses } from './ExpensesContext'; 
import './TrackExpensesPage.css';

const TrackExpensesPage = () => {
    const { addExpense, filterExpensesByDate, calculateTotalAmount, setSpendingLimit, limit } = useExpenses();
    const [expenseData, setExpenseData] = useState({
        item: '',
        amount: '',
        date: ''
    });
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [newLimit, setNewLimit] = useState(''); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddExpense = (e) => {
        e.preventDefault();
        addExpense(expenseData); 
        setExpenseData({ item: '', amount: '', date: '' });
    };

    const handleFilterExpenses = (e) => {
        const selectedDate = e.target.value;
        const filtered = filterExpensesByDate(selectedDate); 
        setFilteredExpenses(filtered);
    };

    const handleSetLimit = (e) => {
        e.preventDefault();
        setSpendingLimit(newLimit);
        setNewLimit('');
    };

    const totalAmountSpent = calculateTotalAmount(); 
    const isOverLimit = totalAmountSpent > limit; 

    return (
        <div className="expenses-container">
            <h2>Track Expenses</h2>

            <form onSubmit={handleAddExpense}>
                <label htmlFor="item">Expense Item</label>
                <input
                    type="text"
                    id="item"
                    name="item"
                    value={expenseData.item}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={expenseData.amount}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={expenseData.date}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit" className="cta-button">Add Expense</button>
            </form>

            <div className="limit-container">
                <form onSubmit={handleSetLimit}>
                    <label htmlFor="limit">Set Spending Limit</label>
                    <input
                        type="number"
                        id="limit"
                        name="limit"
                        value={newLimit}
                        onChange={(e) => setNewLimit(e.target.value)}
                        required
                    />
                    <button type="submit" className="cta-button">Set Limit</button>
                </form>
            </div>

            <div className="total-amount">
                <h3>Total Amount Spent: <span className={isOverLimit ? 'over-limit' : ''}>${totalAmountSpent}</span></h3>
                <h4>Spending Limit: ${limit}</h4>
            </div>

            <div className="filter-container">
                <label htmlFor="filterDate">Filter by Date</label>
                <input
                    type="date"
                    id="filterDate"
                    onChange={handleFilterExpenses}
                />
            </div>

            <div className="expenses-list">
                <h3>Expense History</h3>
                <ul>
                    {filteredExpenses.length > 0
                        ? filteredExpenses.map((expense, index) => (
                            <li key={index}>
                                {expense.item}: ${expense.amount} on {expense.date}
                            </li>
                        ))
                        : <li>No expenses for this date.</li>}
                </ul>
            </div>
        </div>
    );
};

export default TrackExpensesPage;
