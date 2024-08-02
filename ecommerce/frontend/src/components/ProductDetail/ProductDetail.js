import React from 'react';
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

const ProductDetail = () => {
  // Datos de ejemplo para el producto
  const product = {
    name: 'Producto Ejemplo',
    description: 'Esta es la descripción del producto. Es un producto de alta calidad y muy útil.',
    price: 49.99,
    rating: 4.5,
    qty: 4,
    images: [
      'https://neekcotton.com/cdn/shop/products/3_NOVIEMBRE_kits_7_e8a53d39-a84d-4699-89c9-f61ce6ac566f_720x715.jpg?v=1651682238',
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400'
    ]
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
            {/* Sección de la imagen del producto */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.images[0]}
                  alt={product.name}
                />
              </Card>

                {/* Sección de cambio de imagen */}
                <Swiper>
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Imagen ${index + 1}`}
                      style={{ width: '30%', height: '30%', objectFit: 'cover' }}
                    />
                  </SwiperSlide>
                ))}
                </Swiper>
        </Grid>

        {/* Sección de detalles del producto */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Rating value={product.rating} precision={0.5} readOnly />
          <Typography variant="h5" color="textSecondary" gutterBottom>
            ${product.price.toFixed(2)}
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
        </Grid>

        {/* Sección de especificaciones y reseñas */}
        <Grid item xs={12}>
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
      </Grid>
    </Container>
  );
};

export default ProductDetail;