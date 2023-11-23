'use client'
import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log(formData);
        setFormData({
            name: '',
            message: ''
        })
    };

    return (
        <div className="container mx-auto mt-2 bg-transparent rounded-lg p-3 max-w-[500px] min-w-[300px]">
            <div>
                <p className="text-gray-600 text-xl">Enjoy this Blog?</p>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Comment below</h3>
            </div>
            <form onSubmit={handleSubmit} className="bg-slate-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-2">
                    <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-red-500 hover:bg-red-800 w-full text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
