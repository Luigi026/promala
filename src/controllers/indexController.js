const { validationResult } =require('express-validator')
const session = require('express-session')
module.exports = {
    index : (req, res) => {
        res.render('index')
    },
    admin : (req, res) => {
        res.render('admin')
    },
    userLogin : (req, res) => {

        const errors = validationResult(req);
       /*  return res.send(errors.mapped()); */
        if(errors.isEmpty()){ //Si no hay errores entonces haceme la logica
            
            const name = req.body.name 
            const email = req.body.email 
            const edad = req.body.edad 
            const color = req.body.color 

        req.session.users = { name, email, edad, color }
        res.redirect('admin')
        } else {
            res.render('admin', {
                errors : errors.mapped(),
                old : req.body 
            })
        }
    }
}