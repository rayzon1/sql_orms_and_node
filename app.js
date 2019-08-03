const db = require("./db");
const { Movie, Person } = db.models;

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
      })
    ])

    await Movie.create({
      title: "Toy Story 3",
      runtime: 81,
      releaseDate: "1995-11-22",
      isAvailableOnVhs: true
    });

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

  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map(err => err.message);
      console.log("Validation Errors", errors);
    } else {
      throw error;
    }
  }
})();
