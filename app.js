const db = require("./db");
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

 
(async () => {
  await db.sequelize.sync({ force: true });

  try{

    Promise.all([
      Person.create({
        firstName: "Jack",
        lastName: "Ryan"
      }),
      Person.create({
        firstName: "Tom",
        lastName: "Cruise"
      }),
      Person.create({
        firstName: "Kelley",
        lastName: "Clarkson"
      }) 
    ])

    await Movie.create({
      title: "Toy Story 3",
      runtime: 81,
      releaseDate: "1995-11-22",
      isAvailableOnVhs: true
    });

    const movie3 = await Movie.build({
      title: "Constatine",
      runtime: 105,
      releaseDate: '2001-05-21',
      isAvailableOnVhs: false
    })
    await movie3.save();

    await Movie.create({
      title: "The Dark Knight",
      runtime: 81,
      releaseDate: "2018-09-12",
      isAvailableOnVhs: false
    });

    await Movie.create({
      title: "Terminator 2: Judgement day",
      runtime: 81,
      releaseDate: "1985-10-11",
      isAvailableOnVhs: true
    });

    const toyStory = await Movie.findByPk(1);
    await toyStory.destroy();

    // await movieById.update({
    //   title: 'Trinket Tale 3',
    //   isAvailableOnVhs: false
    // }, {fields: ['isAvailableOnVhs']});
    // console.log(movieById.get({ plain: true }));
    // console.log(movieById.toJSON());

    // const movieByRuntime = Person.findOne({ where: { firstName: 'Jack' } });
    // console.log(movieByRuntime.toJSON());

    const movies = await Movie.findAll({
      attributes: ['id', 'title'],
      order: [['id', 'DESC']]
    });
    console.log(movies.map(movie => console.log(movie.toJSON())));

  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map(err => err.message);
      console.log("Validation Errors", errors);
    } else {
      throw error;
    }
  }
})();
