const express = require('express');
const { register, processLogin, processRegister, login, profile, update, logout } = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const router = express.Router();

/*  /users  */

router
    .get('/register', register)

    .post('/register', registerValidator, processRegister) //Implementamos en el metodo POST donde recibe los datos del registro

    .get('/login', login)

    .post('/login', loginValidator,processLogin)

    .get('/profile', profile)

    .put('/update', update)

    .get('/logout', logout)
    

module.exports = router;
