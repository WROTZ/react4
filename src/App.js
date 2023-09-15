// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './ProductList';
import FilterForm from './FilterForm';
import SearchForm from './SearchForm';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');

  useEffect(() => {
    // Simulated product data for this example
    const sampleProducts = [
      { id: 1, name: 'iphone', price: 100000, category: 'Mobile Phones', review:'good phone' },
      { id: 2, name: 'samsung', price: 20000, category: 'Mobile Phones',review: 'average' },
      { id: 3, name: 'redmi', price: 15000, category: 'Mobile Phones' },
      { id: 4, name: 'realme', price: 1000, category: 'Mobile Phones' },
      { id: 5, name: 'lg', price: 25000, category: 'Mobile Phones' },
      { id: 6, name: 'lenovo', price: 30000, category: 'Mobile Phones' },
      { id: 11, name: 'Benz', price: 100000, category: 'Cars' },
      { id: 12, name: 'Volkswagen', price: 20000, category: 'Cars' },
      { id: 13, name: 'Maruti', price: 15000, category: 'Cars' },
      { id: 14, name: 'Fiat', price: 1000, category: 'Cars' },
      { id: 15, name: 'BMW', price: 25000, category: 'Cars' },
    ];
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleFilter = () => {
    const filtered = products.filter(
      (product) =>
        (!category || product.category.includes(category)) &&
        (!minPrice || product.price >= parseInt(minPrice)) &&
        (!maxPrice || product.price <= parseInt(maxPrice))
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <h1>Product Listing App</h1>
      <FilterForm
        category={category} maxPrice={maxPrice}
        setCategory={setCategory}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        onFilter={handleFilter}
      />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} ({product.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

