var dotenv = require('dotenv')
dotenv.config()


module.exports = {
    server: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    options:{
        enableArithAbort: false
    }
}