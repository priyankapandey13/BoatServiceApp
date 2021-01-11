// eslint-disable-next-line strict
"use strict";

// const config1 = require("../config/custom-environment-variables.json");
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;

// if (!config1.get("jwtPrivateKey")) {
//   console.error("Fatal Error: jwtPrivateKey is not defined. i am in index.js");
//   process.exit(1);
// }

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//All tables
db.boat = require("./boat")(sequelize, Sequelize);
db.boatSubType = require("./boatSubType")(sequelize, Sequelize);
db.boatType = require("./boatType")(sequelize, Sequelize);
db.company = require("./company")(sequelize, Sequelize);
db.engine = require("./engine")(sequelize, Sequelize);
db.job = require("./job")(sequelize, Sequelize);
db.proposal = require("./proposal")(sequelize, Sequelize);
db.service = require("./service")(sequelize, Sequelize);
db.service_boat_type = require("./service_boat_type")(sequelize, Sequelize);
db.userrole = require("./user_role")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);

// Relations

db.user.hasMany(db.company, {
  foreignKey: "user_id",
});

db.company.belongsTo(db.user, {
  foreignKey: "user_id",
});

db.service.hasMany(db.job, {
  foreignKey: "service_id",
});

db.service.hasMany(db.service_boat_type, {
  foreignKey: "service_id",
});

db.proposal.belongsTo(db.company, {
  foreignKey: "company_id",
});

db.proposal.belongsTo(db.job, {
  foreignKey: "job_id",
});

db.job.hasMany(db.proposal, {
  foreignKey: "job_id",
});

db.company.hasMany(db.proposal, {
  foreignKey: "company_id",
});

db.boat.hasMany(db.job, {
  foreignKey: "boat_id",
});

db.job.belongsTo(db.boat, {
  foreignKey: "boat_id",
});

db.user.hasMany(db.boat, {
  foreignKey: "user_id",
});

db.boat.belongsTo(db.user, {
  foreignKey: "user_id",
});

db.service.hasMany(db.job, {
  foreignKey: "service_id",
});

db.job.belongsTo(db.service, {
  foreignKey: "service_id",
});

db.service_boat_type.belongsTo(db.boat_type, {
  foreignKey: "boat_type_id",
});

db.boat_type.hasMany(db.service_boat_type, {
  foreignKey: "boat_type_id",
});

module.exports = db;
