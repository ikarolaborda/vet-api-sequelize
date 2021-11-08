module.exports = (sequelize, Sequelize,  DataTypes) => {
    const AttendanceStatus = sequelize.define("attendance_status", {
      status_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      status_description: {
        type: Sequelize.STRING(70),
        allowNull: false
      }
    }, {
      timestamps: false,
      tableName: 'attendance_status'
    });
  
    AttendanceStatus.associate = function(models) {
        AttendanceStatus.hasMany(models.Attendance, {as: 'attendances'})
      };
    return AttendanceStatus;
  };