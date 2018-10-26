const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'koa_api_test'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'koa_api'
    },
    // FOR DOCKER TEST
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    // FOR DOCKER TEST
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
