module.exports = (sequelize, Sequelize,  DataTypes) => {
    const Attendance = sequelize.define("attendance", {
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
      attendance_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      attendance_service: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      create_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      schedule_date: {
          type: Sequelize.DATE,
          allowNull: false

      }
    }, {
      timestamps: false,
      tableName: 'attendance'
    });

    Attendance.associate = function(models) {
        Attendance.belongsTo(models.AttendanceStatus, {foreignKey: 'attendance_status', as: 'status'})
        Attendance.belongsTo(models.AttendanceService, {foreignKey: 'attendance_service', as: 'service'})
      };
  
    return Attendance;
  };