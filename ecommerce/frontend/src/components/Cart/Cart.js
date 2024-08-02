import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Divider,
  IconButton,
  List,
  ListItem,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  // Datos de ejemplo para los artículos en el carrito
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 29.99, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Producto 2', price: 19.99, quantity: 2, image: 'https://via.placeholder.com/100' }
  ]);

  // Estado para mostrar el proceso de compra
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <List>
            {cartItems.map(item => (
              <ListItem key={item.id}>
                <Card style={{ width: '100%', display: 'flex' }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    style={{ width: 100, height: 100 }}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      ${item.price.toFixed(2)}
                    </Typography>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                      InputProps={{ inputProps: { min: 1 } }}
                    />
                    <IconButton onClick={() => handleRemoveItem(item.id)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resumen del Carrito
              </Typography>
              <Divider />
              <Typography variant="body1" gutterBottom>
                Subtotal: ${getTotal()}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Actualizar carrito
              </Button>
              <Button variant="contained" color="secondary" fullWidth style={{ marginTop: '10px' }} onClick={handleCheckout}>
                Continuar con la compra
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={showCheckout} onClose={handleBackToCart}>
        <DialogTitle>Proceso de compra</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Dirección de Envío
              </Typography>
              <TextField
                fullWidth
                label="Nombre completo"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Dirección"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Ciudad"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Estado/Provincia"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Código postal"
                variant="outlined"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Método de Pago
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Tipo de tarjeta</InputLabel>
                <Select defaultValue="" label="Tipo de tarjeta">
                  <MenuItem value="visa">Visa</MenuItem>
                  <MenuItem value="mastercard">MasterCard</MenuItem>
                  <MenuItem value="amex">American Express</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Número de tarjeta"
                variant="outlined"
                margin="normal"
                type="number"
              />
              <TextField
                fullWidth
                label="Fecha de vencimiento"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Código de seguridad"
                variant="outlined"
                margin="normal"
                type="number"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBackToCart} color="primary">Cancelar</Button>
          <Button onClick={() => {
            // Aquí puedes agregar lógica para finalizar la compra
            handleBackToCart();
          }} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Cart;