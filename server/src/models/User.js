const { Model } = require('sequelize');
const CONSTANTS = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // TODO associations
      User.hasMany(models.Offer, { foreignKey: 'userId', targetKey: 'id' });
      User.hasMany(models.Contest, { foreignKey: 'userId', targetKey: 'id' });
      User.hasMany(models.Rating, { foreignKey: 'userId', targetKey: 'id' });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'anon.png',
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      role: {
        type: DataTypes.ENUM(...Object.values(CONSTANTS.ROLES)),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      balance: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: true,
          min: 0,
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: true,
          min: 0,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
