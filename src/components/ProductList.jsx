import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h2" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category} <br />
                Company: {product.company} <br />
                Discount: {product.discount}% <br />
                Price: ${product.price} <br />
                Product Name: {product.name} <br />
                Rating: {product.rating} <br />
                Availability: {product.availability}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
