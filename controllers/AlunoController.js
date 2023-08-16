const Aluno = require("../models/Aluno")
const Foto  = require ("../models/Fotos")
class AlunoController {

    async index(req, res) {
        const alunos = await Aluno.findAll({
            attributes: ['id','nome','sobrenome','email','peso','altura'],
            order: [['id','DESC'], [Foto, "id", "DESC"]],
            include: {
                model: Foto,
                attributes: ['url','filename']
            }
        });

        res.status(200).json(alunos)

    }
    async store(req, res) {
        try {

            const aluno = await Aluno.create(req.body)
            return res.json(aluno)
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map(e => e) })
        }
    }
    async show(req, res) {
        try {


            const { id } = req.params

            if (!id) return res.status(400).json({ errors: ["ID NAO EXISTE!"] })

            const aluno = await Aluno.findByPk(id, {
                attributes: ['id','nome','sobrenome','email','peso','altura'],
                order: [['id','DESC'], [Foto, "id", "DESC"]],
                include: {
                    model: Foto,
                    attributes: ['url','filename']
                }
            });
            if (!aluno) return res.status(400).json({ errors: ["ALUNO NAO EXISTE!"] })


            return res.json(aluno)
        } catch (e) {

            return res.status(400).json({ errors: e.errors.map(e => e.message) })
        }
    }
    async delete(req, res) {
        try {


            const { id } = req.params

            if (!id) return res.status(400).json({ errors: ["ID NAO EXISTE!"] })

            const aluno = await Aluno.findByPk(id);
            if (!aluno) return res.status(400).json({ errors: ["ALUNO NAO EXISTE!"] })


            await aluno.destroy().then(() => res.json("Aluno apagado"))
                .catch(() => res.json("erro ao apagar aluno"))

        } catch (e) {

            return res.status(400).json({ errors: e.errors.map(e => e.message) })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params

            if (!id) return res.status(400).json({ errors: ["ID NAO EXISTE!"] })

            const aluno = await Aluno.findByPk(id);
            if (!aluno) return res.status(400).json({ errors: ["ALUNO NAO EXISTE!"] })

            await aluno.update(req.body)

            return res.status(200).json(aluno)
        } catch (e) {

            res.status(400).json({ erros: e.errors.map(err => err.message) })
        }


    }


}

export default new AlunoController();