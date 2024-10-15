class User {
    constructor(name, lastname, email) {
        this.id = Date.now().toString();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}

const users = [];

const save = (user) => {
    users.push(user);
    return user;
}

const getAll = ()=>{
    return users;
}

module.exports = {
    User,
    save,
    getAll
};