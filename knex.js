const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'ssostatv',
  },
})

export default knex