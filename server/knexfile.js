module.exports = {
  client: "pg",
  connection: require("./config").connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    seedName: "knex_migrations",
    directory: "./seeds",
  },
};
