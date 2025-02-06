import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { getAllProducts } from '../../api/api';

const ProductDetail = () => {
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

  if (products.length === 0) {
    return <Typography variant="h6">Cargando productos...</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={6} key={product.productID}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={product.img1}
                alt={product.productName}
              />
            </Card>

            <Swiper>
              {[product.img1, product.img2, product.img3].map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    style={{ width: '30%', height: '30%', objectFit: 'cover' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Typography variant="h4" gutterBottom>
              {product.productName}
            </Typography>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="h5" color="textSecondary" gutterBottom>
              ${product.productPrice.toFixed(2)}
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Button variant="contained" color="primary" size="large">
              Añadir al carrito
            </Button>
            <Button variant="outlined" color="secondary" size="large" style={{ marginLeft: '10px' }}>
              Comprar ahora
            </Button>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Especificaciones</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Aquí puedes agregar especificaciones técnicas o detalles adicionales del producto.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Reseñas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Aquí puedes agregar reseñas de los usuarios.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductDetail;