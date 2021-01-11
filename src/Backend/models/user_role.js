// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const Userrole = sequelize.define(
    "user_role",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },

      role: DataTypes.STRING,

      created_at: {
        type: DataTypes.DATE,
        field: "created_at",
      },

      updated_at: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      freezeTableName: true,
      tableName: "user_role",
      timestamps: false,
    }
  );

  return Userrole;
};
