const Users = require('../models/users')
const { v4: uuid } = require("uuid")
const md5 = require('md5')

module.exports = {
    async registerUsers(req, res) {
        const {name, birthday, email, password} = req.body
        const hashedPassword = md5(req.body.password)
        const ptBrDateFormat = req.body.birthday.split('/').reverse().join('/')
        const users = new Users({_id:uuid(), name, birthday:ptBrDateFormat, email, password: hashedPassword})
        await users.save()
        return res.status(201).json({message: "Usuário cadastrado com sucesso!"})
    },

    async getUsers(req, res) {
        const users = await Users.find()
        const name = req.query.name;

        if (name) {
            const usersByName = users.filter((user) => user.name.toUpperCase().includes(name.toUpperCase()))
            res.send(usersByName)
        }

        res.status(200).json(users)
    },

    async deleteUsers(req, res) {
        const {_id} = req.body
        const deleteUser = await Users.deleteOne({_id}, (err) => {
            //Retornar erro quando não conseguir apagar no banco de dados
            if(err) return res.status(400).json({
                error: true,
                message: "Erro: Usuário não foi apagado!"
            });
    
            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json({
                error: false,
                message: "Usuário apagado com sucesso!"
            });
        })
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