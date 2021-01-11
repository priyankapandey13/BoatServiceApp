module.exports = (sequelize, DataTypes) => {
  const BoatSubType = sequelize.define(
    "boat_subtype",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,

      img: DataTypes.STRING,

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
      tableName: "boat_subtype",
      timestamps: false,
    }
  );

  return BoatSubType;
};
