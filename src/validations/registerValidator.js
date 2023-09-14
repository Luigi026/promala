const { check, body } = require('express-validator')
const { readJSON } = require('../data')

module.exports = [

    check('name')
        .isLength({
            min : 4,
        }).withMessage('Es requerido').isAlpha().withMessage('Solo letras'),

    check('surname')
        .isLength({
            min : 2,
        }).withMessage('Es requerido')
        .isAlpha('es-ES').withMessage('Solo letras'), //('es-ES) : Considera el alfabeto en español

    body('email')
        .notEmpty()
        .withMessage('Es requerido')
        .isEmail()
        .withMessage('Formato invalido') 
// VALIDACION CUSTOM : recibe dos valores el valor donde estoy parado y el reques desestructurado 
//Primero necesito traerme el json DE USUARIOS, coloco una constante user y me traigo el JSON de usuarios con readJSON
//Luego guardo en constante user donde user va a tomar el valor de recorrido con find donde cada elemento es un usuario y quiero que me devuelva el usuario cuyo propiedad email sea estrictamente igual al valor del check
//Si existe usuario retorname false sino retorname true
        .custom((value, {req}) => {
            const users = readJSON('users.json')
            const user = users.find((user) => user.email === value)
            if(user) {
                return false
            }
            return true
        }).withMessage('El email ya se encuentra registrado'),
    check('password')
        .isLength({
            min : 6,
            max : 12,
        }),

    body('password2')        
        .custom((value, {req} )=> {
            if(value !== req.body.password) {
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden')
]