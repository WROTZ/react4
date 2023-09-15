// src/SearchForm.js
import React from 'react';

function SearchForm({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="search-form">
      <h4>Search Products</h4>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchForm;
