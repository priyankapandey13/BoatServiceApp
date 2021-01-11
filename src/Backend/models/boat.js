// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define(
    "boat",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      boat_subtype_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "boat_subtype",
          key: "id",
        },
      },
      engine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "engine",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },

      engine_serial_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      length: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },

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
      tableName: "boat",
      timestamps: false,
    }
  );

  return Boat;
};
