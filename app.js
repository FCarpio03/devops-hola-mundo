const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde DevOps!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Este es un cambio de prueba para GitHub Actions
