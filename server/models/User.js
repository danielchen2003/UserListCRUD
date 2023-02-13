const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("userlist", "root", "clf19908484", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
})

const User = sequelize.define("User", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

User.sync({ force: false })

module.exports = User
