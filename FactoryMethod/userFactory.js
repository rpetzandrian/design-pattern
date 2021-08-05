class User {
  constructor(name, role, status) {
    this.name = name
    this.role = role
    this.status = status
  }

  show() {
    return ({
      name: this.name,
      role: this.role,
      status: this.status
    })
  }
}

class UserFactory {

  createAdmin(name) {
    return new User(name, 'admin', 'active')
  }

  createAuthor(name) {
    return new User(name, 'author', 'active')
  }
}

module.exports = UserFactory