import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const ProductSpotlightPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://json-server.bytexl.app/products/${id}`)
      .then(response => {
        setProduct(response.data);
      });
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Details
      </Typography>
    </Container>
  );
};

export default ProductSpotlightPage;
