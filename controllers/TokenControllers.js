const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")

const verifyToken = async (password, hash) => {
    console.log(await bcryptjs.compare(password, hash))
    return await bcryptjs.compare(password, hash);
}

class TokenController {
    async store(req, res) {

        const { email = '', password = '' } = req.body;
        console.log(email, password)

        if (!email || !password) return res.status(401).json({ errors: ["Credenciais inválidas"] })

        const user = await User.findOne({ where: { email } })

        if (!user) return res.status(401).json({ errors: ["Usuario nao existe"] })

        if (!await verifyToken(password, user.password_hash)) {
            return res.status(401).json({ errors: ["senha inválida"] })
        }
        console.log(process.env.TOKEN_SECRET)
        console.log (process.env.TOKEN_EXPIRATION )
        const { id } = user;
        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn:process.env.TOKEN_EXPIRATION
            ,

        })
        res.status(200).json({ token })
    }
}

export default new TokenController();  