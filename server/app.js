require("dotenv").config()
const express = require("express")
const User = require("./models/User")
const app = express()
const cors = require("cors")
const userRoutes = require("./routers/users")
const { signin } = require("./controller/users")

app.use(cors())

app.use(express.json())
// app.use("/user", userRouters)

app.post("/signin", async (req, res) => {
  const token = await signin(req)
  console.log(token)

  res.send(token)
})

app.get("/", (req, res) => {
  res.send("This is a root")
})

app.get("/api", (req, res) => {
  res.json({
    success: 200,
    message: "Welcome to the API",
  })
})

app.get("/all", (req, res) => {
  User.findAll({}).then((users) => {
    res.json({
      success: 200,
      users: users,
    })
  })
})

app.get("/insert", (req, res) => {
  User.create({
    firstName: "Marry6",
    lastName: "Kim6",
    age: 18,
    email: "upchh@exampleee.com",
    mobile: "1234567899",
    role: "user",
    password: "test6",
    username: "test6",
  })
    .then((result) => {
      res.json({
        success: 201,
        message: result,
      })
    })
    .catch((err) => {
      res.json({
        success: 400,
        message: err.message,
      })
    })
})

app.post("/add", async (req, res) => {
  console.log(req.body)
  const { firstName, lastName, age, email, mobile, role, password, username } =
    req.body
  User.create({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    age: `${age}`,
    email: `${email}`,
    mobile: `${mobile}`,
    role: `${role}`,
    password: `${password}`,
    username: `${username}`,
  })
    .then((result) => {
      res.json({
        success: 201,
        message: result,
      })
    })
    .catch((err) => {
      res.json({
        success: 400,
        message: err.message,
      })
    })
})

const port = process.env.PORT || 4000
app.listen(4000, () => {
  console.log("server up and running on PORT :")
})
