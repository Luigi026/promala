const { v4 : uuidv4 } = require('uuid');  //Intalar npm i bcryptjs
const { hashSync } = require('bcryptjs')
//metodo de bcrypt : hashSync
const User = function({ name, surname, email, password }) {

    this.id = uuidv4();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password);
    this.role = "user";
    this.createAt = new Date

}

module.exports = User