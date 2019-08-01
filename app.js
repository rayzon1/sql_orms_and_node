const db = require("./db");
const { Movie } = db.models;

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

  try {
    await Movie.create({
      title: "Toy Story",
      description: "shit movie, shit actors",
      year: 1986
    });

    await Movie.create({
      title: "The Dark Knight",
      description: "good movie, great actors",
      year: 1999
    });

    await Movie.create({
      title: "Alien",
      description: "classic movie with ok actors",
      year: 1985
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
