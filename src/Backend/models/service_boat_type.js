// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const ServiceBoatType = sequelize.define(
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

  ServiceBoatType.associate = function (models) {
    ServiceBoatType.belongsTo(models.service, {
      foreignKey: "service_id",
    });

    ServiceBoatType.belongsTo(models.boat_type, {
      foreignKey: "boat_type_id",
    });
  };

  return ServiceBoatType;
};
