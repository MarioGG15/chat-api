const sequelize = require ("sequelize")

const db = new sequelize({
    database: "chat_db",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Feroce24",
    dialect: "postgres",
    logging: false,
  });

module.exports = db;