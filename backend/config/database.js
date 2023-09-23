const { Sequelize } = require('sequelize');

// Carregue as configurações do arquivo config.json
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

// Inicialize o Sequelize com as configurações do arquivo config.json
const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;
