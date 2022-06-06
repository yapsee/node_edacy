require('jsonwebtoken')
const users = [
  {
    id: 1, username: 'aliou', password: '1234', role: 'ADMIN'
  },
  {
    id: 2, username: 'akhy', password: '1234', role: 'USER'
  },
  {
    id: 3, username: 'kalsoum', password: '1234', role: 'USER'
  }
]

module.exports.signUpUser = (userparams) => {

  let user = {...userparams, role: 'ADMIN', id: users.length + 1}
  users.push(user)
  return user

}

module.exports.findUserByUsername = (username) => {
  let user =  users.find((user) => user.username === username);
  return user

}