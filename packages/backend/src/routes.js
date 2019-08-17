const routes = require('express').Router()
const userController = require('./controllers/users.controller')

routes.post('/users', userController.createUser)
routes.get('/users', userController.getAllUsers)
routes.get('/users/:_id', userController.getUser)

module.exports = routes
