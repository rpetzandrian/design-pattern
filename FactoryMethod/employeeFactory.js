class EmployeeProgrammer {
  constructor(gaji) {
    this.gaji = gaji
  }

  getGaji() {
    return this.gaji
  }
}

class EmployeeManager {
  constructor(gaji) {
    this.gaji = gaji
  }

  getGaji() {
    return this.gaji
  }
}

module.exports = class Employee {
  constructor(type) {
    this.type = type
  }

  create(type) {
    if (type == 'programmer') {
      return new EmployeeProgrammer('Rp 10.000.000')
    } else {
      return new EmployeeManager('Rp 30.000.000')
    }
  }
}