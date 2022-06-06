const UsersService = require('../users/users.service');
const jwt = require('jsonwebtoken');


module.exports.register = ({ username, password }) => {
    return UsersService.signUpUser({ username, password });
}

module.exports.login = ({ username, password }) => {
    let user = UsersService.findUserByUsername(username);
    if(!user || user.password !== password) {
        return null;
    } else {
        user = { ...user };
        delete user.password;
        const token = jwt.sign(user, 'NodeEdacy', { expiresIn: 60 * 60 });
        return { user, token };
    }
}

module.exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'NodeEdacy', (error, decoded) => {
            if(error) {
                reject(error);
            } else {
                resolve(decoded);
            }
        })
    })
}



module.exports.listUsers = () => {
    return UsersService.list();
}