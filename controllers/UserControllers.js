const User = require("../models/User")



class UserController {
    async store(req, res) {
        try {
            const user = await User.create(req.body)
            const { id, nome, email } = user;

            res.status(200).json({ id, nome, email })


        } catch (e) {

            res.status(400).json({ erros: e.errors.map(err => err.message) })
        }
    }

    async index(req, res) {
        try {
            const usersAll = await User.findAll({ attributes: ['id', 'nome', 'email'] })

            return res.status(200).json({
                "app": usersAll
            })
        } catch (e) {
            res.status(400).json({ erros: e.errors.map(err => err.message) })
        }

    }

    async show(req, res) {
        try {

            const usuarios = await User.findByPk(req.params.id)

            const { id, nome, email } = usuarios;

            return res.json({ id, nome, email })
        } catch (e) {
            res.status(400).json({ erros: e.errors.map(err => err.message) })
        }

    }
    async update(req, res) {
        try {


            const usuarios = await User.findByPk(req.userId)

            if (!usuarios) return res.status(400).json({ errors: ["ID NAO EXISTE"] })


            await usuarios.update(req.body)
            const { id, nome, email } = usuarios;


            return res.status(200).json({ id, nome, email })


        } catch (e) {
            res.status(400).json({ erros: e.errors.map(err => err.message) })
        }
    }
    async delete(req, res) {
        try {

            const usuarios = await User.findByPk(req.userId)

            if (!usuarios) return res.status(400).json({ errors: ["ID NAO EXISTE"] })


            await usuarios.destroy()
            return res.status(200).json({
                "app":  "usuario deletado com sucesso!"
            })

        } catch (e) {
            res.status(400).json({ erros: e.errors.map(err => err.message) })
        }
    }
}

export default new UserController();