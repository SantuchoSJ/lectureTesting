const S = require('sequelize');

const db = new S('postgres://localhost:5432/testing-sequelize');

class Student extends S.Model{}

Student.init({
  name: {
    type: S.STRING,
    allowNull: false,
  },
  camada: {
    type: S.STRING,
  },
  curso: {
    type: S.ENUM(
      'Intro',
      'Bootcamp',
      'React'),
  },
}, {sequelize: db, model: "student"})

module.exports = Student