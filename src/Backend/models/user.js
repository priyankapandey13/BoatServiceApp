// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

      active: DataTypes.BOOLEAN,

      profile_pic: DataTypes.STRING,

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      user_role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user_role",
          key: "id",
        },
      },

      password: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      city: DataTypes.STRING,

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
      tableName: "user",
      timestamps: false,
    }
  );

  return User;
};
