

//Session siempre va a existir como una variable desde cualquier parte del servidor ya que ya no lo tengo en el entrypoint, lo que puede ser que no exista es userLogin
//Si userLogin existe entonces la informacion que esta en sesion entonces guardamelo en el userlogin de locals 

module.exports = (req, res, next) => {
    //Estoy creando una propiedad userLogin en locals
    res.locals.userLogin = req.session.userLogin && req.session.userLogin;
    next()
    //En resumen : middleware lo que hace es pasar los datos de sesion a locals o guardar en el objeto locals que le corresponde al obejeto response en una propiedad llamada userLogin lo que contiene session
}