// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define(
    "job",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },

      is_emergency: DataTypes.BOOLEAN,

      title: DataTypes.STRING,

      description: DataTypes.STRING,

      allow_contact_by_app: DataTypes.BOOLEAN,
      can_user_bring_boat: DataTypes.BOOLEAN,
      allow_picking_from_spot: DataTypes.BOOLEAN,
      allow_repair_on_spot: DataTypes.BOOLEAN,
      allow_contact_by_phone: DataTypes.BOOLEAN,
      allow_contact_by_email: DataTypes.BOOLEAN,

      lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      price: DataTypes.STRING,

      posted: DataTypes.BOOLEAN,

      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      due_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      is_done: DataTypes.BOOLEAN,

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },

      boat_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "boat",
          key: "id",
        },
      },

      service_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "service",
          key: "id",
        },
      },

      awarded_company_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "company",
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
      tableName: "job",
      timestamps: false,
    }
  );

  return job;
};
