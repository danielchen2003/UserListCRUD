// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"

const UserModal = require("../models/User")

const secret = "test"

const signin = async (req, res) => {
  const { username, password } = req.body

  try {
    const oldUser = await UserModal.findOne({
      where: {
        username: username,
      },
    })
    console.log(oldUser.dataValues)

    if (!oldUser) return { message: "User doesn't exist" }
    // console.log(oldUser.dataValues.password === password)
    const { firstName, lastName, email, role, ...rest } = oldUser.dataValues
    const result = { firstName, lastName, email, role }

    if (oldUser.dataValues.password === password)
      return {
        message: "success",
        result: result,
      }
    else {
      return { message: "Wrong password" }
    }

    // const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
    //   expiresIn: "1h",
    // })

    // return { result: oldUser, token }
  } catch (err) {
    return { message: "Something went wrong" }
  }
}

module.exports = { signin }

// const User = require("../models").User

// const getUser = async (username) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         id: userId,
//       },
//     })
//     return user
//   } catch (error) {
//     console.error(error)
//     throw error
//   }
// }

// export default getUser
