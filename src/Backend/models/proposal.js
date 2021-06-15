// eslint-disable-next-line strict
"use strict";

module.exports = (sequelize, DataTypes) => {
  const proposal = sequelize.define(
    "proposal",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      negotiable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM("pending", "accepted", "rejected", "canceled"),
        allowNull: false,
      },

      company_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "company",
          key: "id",
        },
      },

      job_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "job",
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
      tableName: "proposal",
      timestamps: false,
    }
  );

  return proposal;
};
