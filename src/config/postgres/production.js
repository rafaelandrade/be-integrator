const { PRODUCTION_DATABASE_URL } = process.env

module.exports = {
  DATABASE_RDS_URL: PRODUCTION_DATABASE_URL,
  options: {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
    operatorsAliases: 0
  }
}
