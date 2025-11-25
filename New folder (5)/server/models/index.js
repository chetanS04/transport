const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: dbConfig.pool,
  logging: false,
});

const db = {};

db.User = require("./users")(sequelize, DataTypes);
db.Tenant = require("./tenants")(sequelize, DataTypes);
db.State = require("./states")(sequelize, DataTypes);
db.City = require("./cities")(sequelize, DataTypes);
db.Subscription = require("./subscriptions")(sequelize, DataTypes);
db.SubscriptionType = require("./subscription-types")(sequelize, DataTypes);
db.Settings = require("./settings")(sequelize, DataTypes);

require("./associations")(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
