import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortKey, setSortKey] = useState('ratings'); // Initial state set to 'price'
  const [sortOrder, setSortOrder] = useState('dsc'); // Initial state set to 'asc'

  useEffect(() => {
    axios.get('https://json-server.bytexl.app/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(p => p.category.toLowerCase().includes(filters.category.toLowerCase()));
    }
    if (filters.company) {
      filtered = filtered.filter(p => p.company.toLowerCase().includes(filters.company.toLowerCase()));
    }
    if (filters.rating) {
      filtered = filtered.filter(p => p.rating >= filters.rating);
    }
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);
    }
    if (filters.availability) {
      filtered = filtered.filter(p => p.availability.toLowerCase() === filters.availability.toLowerCase());
    }

    setFilteredProducts(filtered);
  };

  const handleSortChange = (key) => {
    if (key === sortKey) {
      // Toggle sort order
      const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      setSortOrder(newOrder);
    } else {
      // Set new sort key and default to ascending order
      setSortKey(key);
      setSortOrder('asc');
    }
    // Sort products based on key and order
    const sorted = [...filteredProducts].sort((a, b) => {
      const comparison = a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredProducts(sorted);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        All Products
      </Typography>
      <Filters 
        onFilterChange={handleFilterChange} 
        onSortChange={handleSortChange}  
      />
      <br />
      <Typography variant="h4" component="h2" gutterBottom>
        Showing {filteredProducts.length} products
      </Typography>
      <ProductList products={filteredProducts} />
    </Container>
  );
};

export default AllProductsPage;
