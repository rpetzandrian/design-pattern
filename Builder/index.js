const UserY = require('./User')
const UserBuilder = require('./UserBuilder')

const UserX = new UserY(1, 'Rico', '18')

UserX.save()

const User = new UserBuilder()
  .setId(1)
  .setPhone('908940358')
  .setGender('Male')
  .setAge('18')
  .setName('Rico')

console.log(User)