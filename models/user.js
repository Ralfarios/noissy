'use strict';

const { hashPass } = require('../helpers/hashPass.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserChatRoom, {foreignKey: 'UserId'})
      // User.belongsToMany(models.ChatRoom, {
      //   through: models.UserChatRoom,
      //   foreignKey: "UserId"
      // })
    }
  };
  User.init({
    userName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'User Name should not be empty!',
        },
        len: {
          args: [5, 12],
          msg: 'User Name should be minimal 5 and maximal 12 characters',
        },
        is: {
          args: ["^[a-zA-Z0-9_]*$", 'i'],
          msg: 'Only Alphanumeric and underscore allowed!',
        },
      },
      unique: { // still testing
        args: true,
        msg: 'User Name address already in use!'
      },
    },
    email: {
      type: DataTypes.STRING, validate: {
        notEmpty: {
          msg: 'Email should not be empty!',
        },
        isEmail: {
          msg: 'Email format is invalid!'
        },
      },
      unique: { // still testing
        args: true,
        msg: 'Email address already in use!'
      }
    },
    password: {
      type: DataTypes.STRING, validate: {
        notEmpty: {
          msg: 'Password should not be empty!',
        },
        len: {
          args: [5, 12],
          msg: 'Password should be minimal 5 and maximal 12 characters',
        },
        notContains: {
          args: ' ',
          msg: 'White space is not allowed!'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hashPass(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};