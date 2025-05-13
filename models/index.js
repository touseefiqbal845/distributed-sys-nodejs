'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;



// if in model nested sub directories
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const {sequelize} = require('../config/postgres');

// const db = {};
// const modelsPath = path.join(__dirname, 'postgresDb');

// function loadModels(dir) {
//   fs.readdirSync(dir).forEach((file) => {
//     const fullPath = path.join(dir, file);
//     if (fs.statSync(fullPath).isDirectory()) {
//       loadModels(fullPath);
//     } else if (file.endsWith('.js')) {
//       const modelModule = require(fullPath);
//       if (typeof modelModule === 'function') {
//         const model = modelModule(sequelize, Sequelize.DataTypes);
//         db[model.name] = model;
//       }
//     }
//   });
// }


// // Load all models recursively
// loadModels(modelsPath);

// // Setup associations if defined
// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// // Attach sequelize instance
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

