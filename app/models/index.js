const dbConfig = require("../config/db.config.js");
const sequelize = require("sequelize");

const sequelizeConfig = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define: {freezeTableName: true},

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.sequelize = sequelize;
db.sequelizeConfig = sequelizeConfig;

db.tutorials = require("./tutorial.model.js")(sequelizeConfig, sequelize);
db.struktur = require("./struktur.model.js")(sequelizeConfig, sequelize);
db.jenisJab = require("./jenisJab.model.js")(sequelizeConfig, sequelize);

module.exports = db;