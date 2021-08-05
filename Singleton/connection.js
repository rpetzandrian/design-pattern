module.exports = class DB {
  _value;

  connect(value) {
    if (value == undefined) {
      new DB().connect({
        host: 'localhost',
        port: '4040',
        database: 'Postgre',
        password: '12345',
        username: 'user'
      })
    }
    return this._value
  }
}