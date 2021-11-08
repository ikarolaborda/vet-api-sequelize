'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('attendances', {
      attendance_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pet_name: {
        type: Sequelize.STRING(20),
        allowNull:false
      },
      created_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE.NOW
      },
      schedule_date: {
        type: Sequelize.DATE,
        allowNull: false

      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('attendances');
  }
};
