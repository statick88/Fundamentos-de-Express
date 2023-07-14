const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Este es mi primer server en express');
});

app.get('/new', (req, res) =>{
  res.send('Esta es una nueva ruta');
});

app.get('/productos', (req, res) =>{
  res.json({
    name: 'Product 001',
    price: 20.00,
  })
});

app.listen(port, () => {
    console.log('Mi port' + port);
});

