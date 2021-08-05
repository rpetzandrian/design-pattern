const DB = require("./connection");

class ProductServices {
  get() {
    //Metode lama (x)
    // const connect = db.connect('postgresql', 'root', '12345', '8080')

    // connect.sql('select ...')

    const dbHelper = new DB()
    dbHelper.connect({ host: '', port: '', username: '', database: '', password: '' })
  }
}