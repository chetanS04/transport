module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "root1234",
  DB: "superadmin_transport",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 10,
    min: 0,
    acquire: 20000,
    idle: 10000,
  },
};
