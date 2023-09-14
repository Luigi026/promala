const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");
const User = require("../../data/User");// User : debo traerme la funcion constructora

module.exports = (req, res) => {

    /* return res.send(req.body) ==> Me muestra el JSONviewer */

    const errors = validationResult(req) // guardamos en una constante lo que me devuelva el metodo  validationResult

    //SI errors esta vacio entonces haceme la logica de que si no hay errors guardame el usuario de lo contrario devolveme 
    if(errors.isEmpty()){
        const users = readJSON('users.json'); 
        const user = new User(req.body)   // me pasa los datos que vienen por body
        //Ahora al array de usuarios quiero pushearle el usuario y guardo con writeJSON
        users.push(user);
        writeJSON(users, 'users.json') // parametros : Que quiero guardar y Donde lo quiero guardar
        return res.redirect('/') //Luego de registrar al usuario, lo redijo a la vista HOME(/)
    }else{
        return res.send(errors.mapped())
    }
    
}