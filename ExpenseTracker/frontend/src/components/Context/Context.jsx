import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionContextProvider = ({ children }) => {


    const [transaction, setTransaction] = useState([]);

    const [data, setData] = useState({
        'transaction-title': '',
        'transaction-amount': '',
        'transaction-income': '',
        'transaction-type': '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            title: data['transaction-title'],
            amount: data['transaction-amount'],
            type: data['transaction-income'],
            category: data['transaction-type']
        }

        setTransaction(prev => [...prev, newTransaction]);

        console.log('Transaction added:', newTransaction);




    }


    return (
        <TransactionContext.Provider value={{ transaction, setTransaction, data, setData, handleChange, handleSubmit }}>
            {children}
        </TransactionContext.Provider>
    )
}

