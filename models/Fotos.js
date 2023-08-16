const { DataTypes, Sequelize } = require("sequelize")
import appConfig from "../config/app.config";
const sequelize = require("../config/sequelize")

const Aluno = sequelize.define("fotos", {
    filename: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
            notEmpty: {
                msg: "Campo nao pode ser nulo "
            }

        }
    },
    originalname: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {

            notEmpty: {
                msg: "Campo nao pode ser nulo "
            }


        }
    },
    aluno_id: {
        type: DataTypes.INTEGER,
        validator: {
            notEmpty: {
                msg: "Sem id"
            }
    
        }
    },
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${appConfig.url}/images/${this.getDataValue('filename')}`;
      }
    }


})

module.exports = Aluno