module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define(
    "company",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },

      name: DataTypes.STRING,

      lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },

      logo_image_url: DataTypes.STRING,

      cvr: DataTypes.STRING,

      is_paid: DataTypes.BOOLEAN,

      is_enabled: DataTypes.BOOLEAN,

      is_visible: DataTypes.BOOLEAN,

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
      tableName: "company",
      timestamps: false,
    }
  );

  return company;
};
