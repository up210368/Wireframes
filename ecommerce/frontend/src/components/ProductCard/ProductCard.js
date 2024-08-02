import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getAllProducts } from '../../api/api';
import { useState, useEffect } from 'react';

const ProductCard = ()  => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product)=>(
      <Card sx={{ maxWidth: 300 }}> 
        <CardActionArea>
          <CardMedia
            component="img"
            height="175"
            image={product.img1}
            alt={product.productName}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {product.productPrice}
          </Typography>
          <Typography variant="body2">
            {product.productDescription}
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      ))}
    </div>
  );
}

export default ProductCard;