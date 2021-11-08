'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'attendances',
      'attendance_service', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'attendance_service',
          key: 'service_id'
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
