const express = require('express');

const response = require('../../../network/response')
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);  
router.post('/addpost', addPost);

function list(req, res, next){
    Controller.list().then(
        data => {
            response.success(req, res, data, 200);
        }
    ).catch(next);
}

function addPost(req, res, next){
    Controller.upsert(req.body.username, req.body.text).then(
        data => {
            response.success(req, res, data, 200);
        }
    ).catch(next);
}

module.exports = router;