require('dotenv').config();
const app = require('./app');
const { sequelize, connectDB } = require('./config/database');

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  });
});