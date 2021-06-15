// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const myTestUserTable = sequelize.define('myTestUserTable', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  myTestUserTable.associate = function(models) {
    // associations can be defined here
  };
  return myTestUserTable;
};