'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserChatRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserChatRoom.init({
    UserId: DataTypes.INTEGER,
    ChatRoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserChatRoom',
  });
  return UserChatRoom;
};