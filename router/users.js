var express = require('express')
var sql = require('mssql')
var bodyparser = require('body-parser')
var router = express.Router()
router.use(bodyparser.json())
var dbConfig = require('../dbconnection')
var db = sql.connect(dbConfig.dbConnection());

router.route('/')
    .get(function (req, res) {
        db.then(() => {
            // obtener todas personas
            return sql.query('select * from persons')
        }).then(result => {
            res.send(result.recordset)
        })
    })
    .post(function (req, res) {
        // agregar nueva persona
        const { LastName, FirstName, Age } = req.body
        db.then(() => {
            return sql.query(`INSERT INTO persons 
        values('${LastName}', '${FirstName}', '${Age}' )`)
        }).then(result => {
            res.send('persona creado')
        })
    });

router.route('/:lastname')
    // eliminar un usuario por el params de la url
    .delete(function (req, res) {
        db.then(() => {
            return sql.query(`DELETE FROM persons WHERE 
            LastName = '${req.params.lastname}'`)            
        }).then(result => {
            res.send('eliminado')
        })
    })

module.exports.ruta = router