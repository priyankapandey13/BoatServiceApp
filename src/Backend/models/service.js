// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const service = sequelize.define(
    "service",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },

      name: DataTypes.STRING,
      img: DataTypes.STRING,

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
      tableName: "service",
      timestamps: false,
    }
  );

  return service;
};
