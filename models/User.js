const { DataTypes } = require("sequelize")
const bcryptjs = require("bcryptjs")
const sequelize = require("../config/sequelize")



const User = sequelize.define("users", {
    nome: {
        type: DataTypes.STRING,
        toDefaultValue: '',
        validate: {
            len: {
                args: [3, 255],
                msg: "Campo nome nome deve ter entre 3 e 50o"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        toDefaultValue: '',
        unique: {
            msg: "Este email ja existe em nossa base de dados"
        },
        validate: {
            isEmail: {
                msg: "Padrão de email incorreto, corrija"
            }

        }
    },
    password_hash: {
        type: DataTypes.STRING,
        toDefaultValue: '',
    },
    password: {

        type: DataTypes.VIRTUAL,
        toDefaultValue: '',
        validate: {
            len: {
                args: [6, 50],
                msg: "Senha deve ter entre 6 e 50 carcteres"
            }
        }

    }



})

User.addHook('beforeSave', async user => {
    if (user.password) user.password_hash = await bcryptjs.hash(user.password, 10)

})



module.exports = User