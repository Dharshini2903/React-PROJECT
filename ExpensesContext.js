
import React, { createContext, useContext, useState } from 'react';

const ExpensesContext = createContext();

export const useExpenses = () => {
    return useContext(ExpensesContext);
};

export const ExpensesProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    const [limit, setLimit] = useState(0); 

    const addExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    const filterExpensesByDate = (date) => {
        return expenses.filter((expense) => expense.date === date);
    };

    const calculateTotalAmount = () => {
        return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    };

    const setSpendingLimit = (newLimit) => {
        setLimit(parseFloat(newLimit));
    };

    return (
        <ExpensesContext.Provider
            value={{
                expenses,
                addExpense,
                filterExpensesByDate,
                calculateTotalAmount,
                setSpendingLimit,
                limit
            }}
        >
            {children}
        </ExpensesContext.Provider>
    );
};
