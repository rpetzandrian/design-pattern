class User {
  constructor(id, name, gender, age, phone) {
    this.id = id
    this.name = name
    this.gender = gender
    this.age = age
    this.phone = phone
  }

  save() {
    return console.log({
      id: this.id,
      name: this.name,
      gender: this.gender,
      age: this.age,
      phone: this.phone
    })
  }
}

module.exports = User