// src/FilterForm.js
import React from 'react';

function FilterForm({ category,minPrice,setMinPrice, maxPrice, setCategory, setMaxPrice, onFilter }) {
    return (
        <div className="filter-form">
        <h3>Filter Products</h3>
        <div>
        <div>
            <label>Category:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
        <label>Max Price:</label>
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>
        <div>
        <label>Min Price:</label>
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        </div>
        </div>
        <button onClick={onFilter}>Apply Filter</button>
    </div>
    );
}

export default FilterForm;
