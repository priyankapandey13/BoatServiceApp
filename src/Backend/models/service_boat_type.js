// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const serviceBoatType = sequelize.define(
    "service_boat_type",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },

      service_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "service",
          key: "id",
        },
      },

      boat_type_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "boat_type",
          key: "id",
        },
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
      tableName: "service_boat_type",
      timestamps: false,
    }
  );

  serviceBoatType.associate = function (models) {
    serviceBoatType.belongsTo(models.service, {
      foreignKey: "service_id",
    });

    serviceBoatType.belongsTo(models.boat_type, {
      foreignKey: "boat_type_id",
    });
  };

  return serviceBoatType;
};
