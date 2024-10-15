const { save, User } = require('../models/user.model.js');
const {getAll} = require('../models/user.model.js')

const addNewUsers = (name, lastname, email) => {
    const newUser = new User(name, lastname, email);
    return save(newUser);
}

const AllUsers = ()=>{
    return getAll()
}

module.exports = {
    addNewUsers,
    AllUsers
}