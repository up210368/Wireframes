import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductCard = ()  => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image="https://neekcotton.com/cdn/shop/products/3_NOVIEMBRE_kits_7_e8a53d39-a84d-4699-89c9-f61ce6ac566f_720x715.jpg?v=1651682238"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nombre
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            $Precio
          </Typography>
          <Typography variant="body2">
            Description Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;