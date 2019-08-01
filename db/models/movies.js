const Sequelize = require("sequelize");

module.exports = sequelize => {
  class Movie extends Sequelize.Model {}
  Movie.init(
    {
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      year: Sequelize.NUMBER
    },
    { sequelize }
  );

  return Movie;
};
