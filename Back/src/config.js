require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4001,
    },
    mysql: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME || 'todolist'
    },
}