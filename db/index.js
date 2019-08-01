const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  logging: false
});

const db = {
  sequelize,
  Sequelize,
  models: {}
};

db.models.Movie = require("./models/movies")(sequelize);

module.exports = db;
