module.exports = (req, res, next) => {
    if(req.session.userLogin){
        next()
    }else{
        return res.redirect('/users/login')
    }
}
//SI el usuario está logeado, adelante (next()) de lo contrario lo redirijo a login