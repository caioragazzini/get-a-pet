require('dotenv').config();


const app = require('./app');
const { logger } = require('./utils');
const { connect } = require('./models');

const porta = 3000;
app.listen(porta, () => {
  connect();

  logger.info(`Servidor ouvindo na porta ${porta}`);
});