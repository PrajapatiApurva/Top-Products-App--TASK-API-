import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const Filters = ({ onFilterChange, onSortChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: ''
  });
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <Grid container spacing={2} className="mb-4">
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          name="category"
          value={filters.category}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Company"
          variant="outlined"
          fullWidth
          name="company"
          value={filters.company}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Rating"
          variant="outlined"
          fullWidth
          type="number"
          name="rating"
          value={filters.rating}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Price Range"
          variant="outlined"
          fullWidth
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Availability"
          variant="outlined"
          fullWidth
          name="availability"
          value={filters.availability}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FormControl >
          <InputLabel>Sort By</InputLabel>
          <Select
            label="Sort By"
            onChange={handleSortChange}
            defaultValue="price" // Ensure this value matches one of the options ('price', 'rating', 'discount')
          >
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="discount">Discount</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filters;
