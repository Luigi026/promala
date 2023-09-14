const { validationResult } = require("express-validator")
const { readJSON } = require("../../data")

module.exports = (req, res) => {
//traiego mi JSON
//Luego voy a aplicar destructuring de id name y rol del usuario donde recorro el JSON de user con find donde el email conicida con el email que ingresa por body

    const errors = validationResult(req) //Examino los errores que ingresar por el request

    if(errors.isEmpty()){//si esta vacio mostrame el nombre sino mostrame los erorres
        const users = readJSON('users.json')
        const { id, name, role} = users.find(user => user.email === req.body.email)

        req.session.userLogin = {
            id,
            name,
            role
        }
        console.log(req.session.userLogin)

        return res.redirect('/')
    }else{
        return res.send(errors.mapped())
    }    
}