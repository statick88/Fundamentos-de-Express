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
  res.json([
    {
      name: 'Product 001',
      price: 20.00
    },
    {
      name: 'Product 0012',
      price: 100.00
    }
  ])
});

app.get('/productos/:id', (req, res) => { //los 2 puntos son porque recibe un parámetro.
  const {id} = req.params;            // vamos a recoger el id que nos envían
  res.json({
    id,
    name: 'Product 001',
    price: 100.00
  })
});

app.get('/cateorias/:categoryId/productos/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
})

app.listen(port, () => {
    console.log('Mi port' + port);
});

function newFunction() {
  return '/categorias/:categoryId/productos/:productId';
}

