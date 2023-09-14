const { validationResult } = require("express-validator")
const { readJSON } = require("../../data")

module.exports = (req, res) => {
//traiego mi JSON
//Luego voy a aplicar destructuring de id name y rol del usuario donde recorro el JSON de user con find donde el email conicida con el email que ingresa por body

    const errors = validationResult(req) //Examino los errores que ingresar por el request

    if(errors.isEmpty()){//si esta vacio mostrame el nombre sino mostrame los erorres
        const users = readJSON('users.json')
        const { id, name, role} = users.find(user => user.email === req.body.email)
        /* return res.send(req.body) */
        req.session.userLogin = {
            id,
            name,
            role
        }
//Aca traigo a remember / En body existe remember? / Si es distinto a undefined (viene o no viene) 
//Si viene entonces voy a guardar en res la cookie y le voy a dar un nombre "malaUser" y lo guardo en req.session.userLogin (No mandar datos sensibles)
        req.body.remember !== undefined && res.cookie('malaUser', req.session.userLogin, {
           maxAge : 1000 * 60 // Es igual a 1 minuto.
        }) 
        /* console.log(req.session.userLogin) */

        return res.redirect('/')
    }else{
        return res.send(errors.mapped())
    }    
}