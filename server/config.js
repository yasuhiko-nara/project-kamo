module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL ||
    process.env.DB_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "firstpjt",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "postgres",
      charset: "utf8",
    },
};
