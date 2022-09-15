const Users = require('../models/users')
const { v4: uuid } = require("uuid")
const md5 = require('md5')

module.exports = {
    async registerUsers(req, res) {
        const {name, birthday, email, password} = req.body
        const hashedPassword = md5(req.body.password)
        const users = new Users({_id:uuid(), name, birthday, email, password: hashedPassword})
        await users.save()
        return res.status(201).json({message: "Usuário cadastrado com sucesso!"})
    },

    async getUsers(req, res) {
        const users = await Users.find()
        const name = req.query.name;

        if (name) {
            const usersByName = users.filter((user) => user.name.toUpperCase().includes(name.toUpperCase()))
            res.send(usersByName)
        } else {
           return res.status(200).json(users) 
        }
    },

    async deleteUsers(req, res) {
        const {_id} = req.body
        const deleteUser = await Users.deleteOne({_id})
        return res.status(200).json({message: "Usuário deletado com sucesso!"})    
    },

    async editUsers(req, res) {
        const {_id, name, birthday, email, password} = req.body
        const users = await Users.findOne({_id})
        
        users.name = name
        users.birthday = birthday
        users.email = email
        
        if(users.password !== req.body.password && req.body.password !== "") {
            const hashedPassword = md5(req.body.password)
            users.password = hashedPassword
        } 

        await users.save()
        return res.status(200).json({message: "Usuário editado com sucesso!"})
     }
}