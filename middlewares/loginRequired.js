const jwt = require("jsonwebtoken")
const User = require("../models/User")

export default async (req, res, next) => {


    const { authorization } = req.headers

    if (!authorization) return res.status(401).json({ errors: ["Login required"] })



    try {
        const dados = jwt.verify(authorization, process.env.TOKEN_SECRET)

        const { id, email } = dados;


        const user = await User.findOne({
            where: {
                id,
                email
            }
        })

        if (!user) return res.status(401).json({ errors: ["token expirado ou invalido"] })

        req.userId = id;
        req.userEmail = email;
        console.log(dados)
        return next();
    } catch (e) {
        return res.status(401).json({
            errors: ["token expirado ou invalido"]
        })
    }
}