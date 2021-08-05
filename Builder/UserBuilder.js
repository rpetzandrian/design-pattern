module.exports = class UserBuilder {
  _status = 'Active';
  _id;
  _name;
  _gender;
  _phone;
  _age;

  setId(value) {
    this._id = value
    return this;
  }

  setName(value) {
    this._name = value
    return this;
  }

  setGender(value) {
    this._gender = value
    return this;
  }

  setAge(value) {
    this._age = value
    return this;
  }

  setPhone(value) {
    this._phone = value
    return this;
  }

  setStatus(value) {
    this._status = value
    return this;
  }
}