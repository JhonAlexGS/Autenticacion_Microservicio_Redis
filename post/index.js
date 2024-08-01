const express = require('express');

const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express')

const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors')

const app = express();

app.use(bodyParser.json());

// ROUTER
app.use('/api/post', post)

// Se debe colocar de ultimas
app.use(errors)

app.listen(config.post.port, () => {
    console.log('Servicio Post escuchando en el puerto', config.post.port);
}); 