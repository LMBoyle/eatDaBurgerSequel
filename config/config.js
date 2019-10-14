module.exports = {
  development: {
    username: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASS,
    database: 'burgers_db',
    details: {
      host: process.env.LOCAL_HOST,
      port: 3306,
      dialect: 'mysql'
    }
  },
  production: {
    username: process.env.JAWS_USER,
    password: process.env.JAWS_PASS || null,
    database: process.env.JAWS_DATA,
    details: {
      host: process.env.JAWS_HOST,
      port: 3306,
      dialect: 'mysql'
    }
  }
};