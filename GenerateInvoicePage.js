import React, { useState } from 'react';
import './GenerateInvoicePage.css';

const GenerateInvoicePage = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        clientEmail: '',
        serviceDescription: '',
        amount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Invoice Data:', formData);
        alert('Invoice Generated');
    };

    return (
        <div className="invoice-container">
            <h2>Generate Invoice</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="clientName">Client Name</label>
                <input 
                    type="text" 
                    id="clientName" 
                    name="clientName" 
                    value={formData.clientName} 
                    onChange={handleInputChange} 
                    required 
                />
                <label htmlFor="clientEmail">Client Email</label>
                <input 
                    type="email" 
                    id="clientEmail" 
                    name="clientEmail" 
                    value={formData.clientEmail} 
                    onChange={handleInputChange} 
                    required 
                />
                <label htmlFor="serviceDescription">Service Description</label>
                <textarea 
                    id="serviceDescription" 
                    name="serviceDescription" 
                    value={formData.serviceDescription} 
                    onChange={handleInputChange} 
                    required 
                />
                <label htmlFor="amount">Amount</label>
                <input 
                    type="number" 
                    id="amount" 
                    name="amount" 
                    value={formData.amount} 
                    onChange={handleInputChange} 
                    required 
                />
                <button type="submit" className="cta-button">Generate Invoice</button>
            </form>
        </div>
    );
};

export default GenerateInvoicePage;
