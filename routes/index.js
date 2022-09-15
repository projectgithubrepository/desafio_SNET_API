const express = require('express')
const users = require('../controllers/users.js')

const routes = express.Router()

routes.get('/', function (req, res) {
    res.send('Wiki home page');
})

routes.post("/users", users.registerUsers)
routes.get("/users", users.getUsers)
routes.post("/deleteUsers", users.deleteUsers)
routes.patch("/users", users.editUsers)

module.exports = routes

