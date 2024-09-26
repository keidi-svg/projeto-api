const express = require('express');
const sequelize = require('./config/db.config');
const carRoutes = require('./routes/car.routes');
const app = express();

app.use(express.json());
app.use('/api', carRoutes);

// Sincroniza o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Conectado ao banco de dados.');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000.');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });