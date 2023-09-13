const { check } = require('express-validator');
// EXPORTO UN ARRAY []. donde uso el metodo check de express-validator
// donde hacemos referencia al valor del atributo name del input
// diciendo que el campo no este vacio y le mando un mensaje

module.exports = [

    check('name')
        .notEmpty().withMessage('Es requerido')
        .isLength({
            min : 4,
            max : 50
        }).withMessage('Es de 4 a 50 caracteres'),

    check('email')
    .notEmpty()
    .withMessage('Es requerido')
    .isEmail()
    .withMessage('Ingresa tu email'),

    check('edad')
    .notEmpty()
    .withMessage('Es requerido')
    .isInt({
        gt :1
    })
    .withMessage('Es requerido'), 
    
    check('color')
    .notEmpty()
    .withMessage('Es requerido')
]
