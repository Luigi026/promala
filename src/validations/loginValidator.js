const {check, body } = require('express-validator');
const { readJSON } = require('../data');
const { compareSync } = require("bcryptjs");

module.exports = [

    check('email')
        .notEmpty()
        .withMessage('Es requerido')
        .isEmail()
        .withMessage('Formato invalido'),

//Necesito verificar que el email ya se encuentre registrado y que la contraseña coincida y me verifique si no esta 
    body('password')
        .custom((value, {req}) => {
            const users = readJSON('users.json');
            const user = users.find(user => user.email === req.body.email);
           /*  if(!user){
                return false
            } else { //SI me da false "error de contraseña" si da true me muestra la vista porque compareSync te pasa la contraaseña hasheada
                if(!compareSync(valor => user.password)){
                    console.log('Error en la contraseña');
                    return false
                }
                return true
           } */
           if(!user || !compareSync(value, user.password)){
                return false
           }else {
                return true
           }
        }).withMessage('Credenciales invalidas')
]