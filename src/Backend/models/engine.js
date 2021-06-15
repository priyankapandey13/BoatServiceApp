module.exports = (sequelize, DataTypes) => {
  const engine = sequelize.define(
    "engine",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },

      type: DataTypes.STRING,
      brand: DataTypes.STRING,

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
      tableName: "engine",
      timestamps: false,
    }
  );

  return engine;
};
