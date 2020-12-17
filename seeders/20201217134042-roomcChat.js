'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('ChatRooms', [
      {
        chatroomname: 'Javascript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chatroomname: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chatroomname: 'Swift',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chatroomname: 'Kotlin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chatroomname: 'C++',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('ChatRooms', null, {})
  }
};
