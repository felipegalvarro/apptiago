const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config.development);

const db = {};

// Carregar todos os modelos
fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
