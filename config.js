module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!'
    },
    mysql: {
        host:process.env.MYSQL_HOST || 'dabase-autentication-micro-redis-2.cxa4kyosu74f.us-east-2.rds.amazonaws.com',
        user: process.env.MYSQL_USER || 'admin',
        password: process.env.MYSQL_PASS || 'admin123',
        database: process.env.MYSQL_DB || 'platzi'
    },
    mysqlService:{
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_SRV || 3001,
    }
}