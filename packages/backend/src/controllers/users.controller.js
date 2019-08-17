const users = require('mongoose').model('users')

module.exports = {
    async createUser(req, res) {
        const createdUser = await users.create(req.body)

        return res.status(201).json(createdUser)
    },

    async getAllUsers(req, res) {
        const returnedUsers = await users.find()

        return res.status(200).json(returnedUsers)
    },

    async getUser(req, res) {
        const returnedUser = await users.findById(req.params._id)

        return res.status(200).json(returnedUser)
    }
}
