// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const BoatType = sequelize.define(
    "boat_type",
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
      tableName: "boat_type",
      timestamps: false,
    }
  );

  return BoatType;
};
