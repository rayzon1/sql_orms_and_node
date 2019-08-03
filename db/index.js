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
db.models.Person = require("./models/person")(sequelize);

module.exports = db;
