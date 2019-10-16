module.exports = {
  development: {
    username: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASS,
    database: 'burgerSequel_db',
    details: {
      host: process.env.LOCAL_HOST,
      port: 3306,
      dialect: 'mysql'
    }
  },
  test: {
    username: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASS || null,
    database: 'burgerSequel_dbTest',
    details: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      logging: false
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