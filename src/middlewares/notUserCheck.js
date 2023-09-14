module.exports = (req, res, next) => {
    if(!req.session.userLogin){
        next()
    }else{
        return res.redirect('/users/profile')
    }
}
//Si el usuario no esta logueado, adelante (next())de lo contrario se redirije a perfil