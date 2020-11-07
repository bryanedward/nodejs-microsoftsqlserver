var express = require('express')
var cors = require('cors')
var user = require('./router/users')
var app = express().use(cors())
app.use('/home', user.ruta);
app.listen(process.env.PORT || 4000)
console.log(process.env.PORT);