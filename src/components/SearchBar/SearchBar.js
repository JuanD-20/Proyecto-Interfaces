import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        // Implementar la lógica de búsqueda aquí
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <div className="search-input">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Buscar cupo"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;