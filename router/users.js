var express = require('express')
// const bodyParser = require('body-parser')
var router = express.Router()

router.route('/').get(function (req,res) {
    res.send('sss')
});


module.exports.ruta = router