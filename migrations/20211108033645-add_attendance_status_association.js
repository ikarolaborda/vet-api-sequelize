'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'attendances',
      'attendance_status', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'attendance_status',
            key: 'status_id'
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
