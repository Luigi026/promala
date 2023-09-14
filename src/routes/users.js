const express = require('express');
const { register, processLogin, processRegister, login, profile, update, logout } = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');
const router = express.Router();

/*  /users  */

router
    .get('/register',notUserCheck, register) //userCheck : para acceder no tiene que estar logueado

    .post('/register', registerValidator, processRegister) //Implementamos en el metodo POST donde recibe los datos del registro

    .get('/login',notUserCheck, login)  //userCheck : para acceder no tiene que estar logueado

    .post('/login', loginValidator,processLogin)

    .get('/profile',userCheck, profile)

    .put('/update',userCheck, update)

    .get('/logout', logout)
    

module.exports = router;
