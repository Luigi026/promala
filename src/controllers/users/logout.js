module.exports = (req, res) => {

    req.session.destroy();   //destruime todo lo que esta en SESSION
    return res.redirect('/')
     
}