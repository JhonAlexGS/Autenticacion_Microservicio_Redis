const express = require('express');

const response = require('../../../network/response')
const Controller = require('./index');

const router = express.Router();

router.post('/login', function(req, res){
    console.log("Logueando")
    Controller.login(req.body.username, req.body.password)
        .then(token => {
            response.success(req, res, token, 200)
        })
        .catch( e => {
            response.error(req, res, "Información invalida", 400)
        })
})

module.exports = router;