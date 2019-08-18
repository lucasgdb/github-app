const routes = require('express').Router()
const userController = require('./controllers/users.controller')

routes.post('/users', userController.createUser)
routes.get('/users', userController.getAllUsers)
routes.delete('/users/:_id', userController.deleteUser)

module.exports = routes
