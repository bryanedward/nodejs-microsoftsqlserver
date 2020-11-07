var express = require('express')
var cors = require('cors')
var sql = require('mssql')
var config = require('./config')
var user = require('./router/users')
var app = express()
app.use(cors())
app.use('/home', user.ruta);

var db = new sql.ConnectionPool(config)
db.connect(err => {
    if (!err) {
        app.listen(process.env.PORT || 4000)
        console.log(process.env.PORT);
    }else{
        console.log(err);
    }
})