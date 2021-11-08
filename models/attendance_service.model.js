module.exports = (sequelize, Sequelize,  DataTypes) => {
    const AttendanceService = sequelize.define("attendance_service", {
      service_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      service_description: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
      
    }, {
      timestamps: false,
      tableName: 'attendance_service'
    });

        AttendanceService.associate = function(models) {
        AttendanceService.hasMany(models.Attendance, {as: 'attendances'})
      };
  
    return AttendanceService;
  };