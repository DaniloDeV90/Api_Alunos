const multer = require("multer")
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig).single("foto")
import Foto from "../models/Fotos"


class FotoController {
    store(req, res) {



        return upload(req, res, async (err) => {
            if (err) return res.status(400).json({ errors: err.code })

            const { originalname, filename } = req.file;

            const { aluno_id } = req.body


            try {
                console.log(aluno_id)
                const foto = await Foto.create({ filename, originalname, aluno_id })


                res.json(foto)

            } catch (e) {
                res.status(404).json({ rrors: ["aluno nao existe"] })
            }

        })


    }

  



    


}

export default new FotoController();