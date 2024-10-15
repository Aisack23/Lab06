const {addNewUsers}  = require('../services/user.services.js');
const {AllUsers} = require('../services/user.services.js');

const addUserController = (req, res) => {
    try {
        const { name, lastname, email } = req.body;
        const user = addNewUsers(name, lastname, email)
        res.render('home.pug', { user });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}

const showUserController = (req, res)=>{
    try{
        const users = AllUsers();
        res.render('allUsers.pug', {users})
    }catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}

const showForm = (req, res) => {
    res.render('form.pug');
}


module.exports = {
    addUserController,
    showForm,
    showUserController
}