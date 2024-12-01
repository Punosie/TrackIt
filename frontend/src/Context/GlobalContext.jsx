import { createContext } from 'react';
import axios from 'axios';
import { useState, useContext } from 'react';

const BASE_URL = 'http://localhost:5000/api/v1/'


const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);


    // Income functions
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getIncomes();
    }

    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-income`);
            setIncomes(response.data.incomes); // Assuming `response.data.incomes` is the correct structure
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while fetching incomes.');
        }
    };

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-income/${id}`);
        getIncomes();
    };

    const totalIncome = () => {
        let total = 0;
        incomes.forEach((income) => {
            total += income.amount;
        });
        return total;
    }
    
    // Expense functions
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}/add-expense`, expense)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getExpenses();
    }

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-expense`);
            setExpenses(response.data.expenses); // Assuming `response.data.expenses` is the correct structure
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while fetching expenses.');
        }
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
        getExpenses();
    }

    const totalExpense = () => {
        let total = 0;
        expenses.forEach((expense) => {
            total += expense.amount;
        });
        return total;
    }

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
