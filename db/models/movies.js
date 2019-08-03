const Sequelize = require("sequelize");

module.exports = sequelize => {
  class Movie extends Sequelize.Model {}
  Movie.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Title cannot be "null".'
          },
          notEmpty: {
            msg: 'Please provide a value for "title".'    
          }
        }
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Runtime cannot be "null".'
          },
          min: {
            args: 1,
            msg: 'Please provide a value greater than 0 for "runtime".'
          }
        }
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'releaseDate cannot be "null".'
          },
          isAfter: {
            args: "1895-12-27",
            msg: 'Please provide a value on or after 1895-12-27.'
          }
        }
      },
      isAvailableOnVhs: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {}
      }
    },
    { 
      timestamps: false,
      sequelize
    }
  );

  return Movie;
};
