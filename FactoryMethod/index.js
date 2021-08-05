const UserFactory = require('./userFactory')
const EmployeeFactory = require('./employeeFactory')

// const user1 = new user('Rico', 'admin', 'active')
// const user2 = new user('Irvan', 'admin', 'active')
// const user3 = new user('Dendy', 'user', 'active')

const User = new UserFactory()
const admin1 = User.createAdmin('Rico')
const author1 = User.createAuthor('Irvan')

console.log(admin1.show())
console.log(author1.show())



const Employee = new EmployeeFactory()
const Programmer = Employee.create('programmer')

console.log(Programmer.getGaji())

