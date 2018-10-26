const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');

const app = new Koa();
const PORT = process.env.PORT || 1337;

// FOR DOCKER TEST
const knex = require('./db/connection')
knex.migrate.rollback() // Use Promise so we'll add data after movies table was created
  .then(() => {return knex.migrate.latest()}) // Create movies table before head
  .then(() => {return knex.seed.run()}) // Add some data
// FOR DOCKER TEST

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
