
//Aca verifico si hay una cookie viva
//Cuando se consulta una coockie es con req y es coockies con (S) 
//Cuando se crea una cookie es res y es cockie sin (S)

module.exports = (req, res ,next) => {
//Si en req.cockies existe la cookie "malaUser" que es el nombre que le di en el controlador "processLogin" entonces la session de userLogin sea la que reciba de req.cookies.maaUser
    if(req.cookies.malaUser){
        req.session.userLogin = req.cookies.malaUser
    }
    next() //Se coloca el next(), de lo contrario el middleware te frena todo
}

//Luego debo aplicarlo en el entrypoint como middleware de aplicacion