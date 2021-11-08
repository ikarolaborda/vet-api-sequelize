module.exports = {
    HOST: "localhost",
    USER: "vet_dbuser",
    PASSWORD: "v3t2021@",
    DB: "vet_api",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };