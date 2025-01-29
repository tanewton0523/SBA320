import React, { useState } from 'react';

const Input = ({ searchBooks }) => {
    const [search, setSearch] = useState(''); // Initialize state

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (typeof searchBooks === 'function') {
            searchBooks(search); // Call the searchBooks function with the current search state
        } else {
            console.error('searchBooks is not a function');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search for books...'
                    className='input'
                    onChange={(e) => setSearch(e.target.value)} // Update state on input change
                />
                <button type='submit' className='btn'>
                    Search
                </button>
            </form>
        </div>  
    );
};

export default Input;