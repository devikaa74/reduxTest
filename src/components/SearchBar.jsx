import React, { useState, useEffect } from 'react';

const SearchBar = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(inputValue);
        }, 500); // Delay of 500ms

        return () => clearTimeout(timer);
    }, [inputValue, setSearchTerm]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search by cuisine"
            onChange={handleChange}
            value={inputValue}
            style={{ marginBottom: '20px', width: '100%', padding: '10px', marginTop: '10px' }}
        />
    );
};

export default SearchBar;