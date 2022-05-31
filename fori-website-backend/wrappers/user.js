const User = require("../models/User")

let findUserByEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        let user = await User.findOne({ email: email })

        if (!user) reject("User not found")

        resolve (user)
    })
}

let addUser = (user_data) => {
    let user = new User(user_data)
    return user.save()
}

module.exports = {
    findUserByEmail,
    addUser
}