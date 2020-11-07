var dotenv = require('dotenv')
dotenv.config()

exports.dbConnection = function () {
    var dbConfig = {
        server: process.env.SERVER,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        options:{
        enableArithAbort: false
        }
    }
    return dbConfig;
}