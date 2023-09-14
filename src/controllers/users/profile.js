const { readJSON } = require("../../data")

module.exports = (req, res) => {

 // 
        const users = readJSON('users.json')
        const user = users.find(user => user.id === req.session.userLogin.id);

        return res.render('profile', {
                ...user
        })

}

//  ERRROR (reading 'id)  : no se puede leer un id en undefined 
//