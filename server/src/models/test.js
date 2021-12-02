const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    static associate(models) {}
  }
  Test.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Test',
    }
  );
  return Test;
};
