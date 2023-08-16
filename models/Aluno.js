const {DataTypes, Sequelize} = require ("sequelize")

const sequelize = require ("../config/sequelize")

const Aluno = sequelize.define ("alunos", {
    nome: {
        type: DataTypes.STRING,
        defaultValue:'',
        validate: {
            len:  {
                args: [3,255],
                msg:"Nome precisa ter entre e e 255 caracteres"
            }
     
        }
    },
    sobrenome: {
        type: DataTypes.STRING,
        defaultValue:'',
        validate: {
            len:  {
                args: [3,255],
                msg:"sobrenome precisa ter entre e e 255 caracteres"
            }
     
        }
    },
    email: {
        type: DataTypes.STRING,
        defaultValue:'',
        unique: {
            msg: "Email ja registrado"
        },
        validate: {

            isEmail:  {
                msg:"Email inválido"
            }
     
        }
    },
    idade:{
        type: DataTypes.INTEGER,
        defaultValue:'',
        validate: {
            isInt:  {
           
                msg:"Idade precisa ser um número inteiro "
            }
     
        }
    },
    altura:{
        type: DataTypes.FLOAT,
        defaultValue:'',
        validate: {
            isFloat:  {
              msg: "Peso precisa ser um numero inteiro ou  ponto flutuante"
            }
     
        }
    },
    peso: {
        type: DataTypes.FLOAT,
        defaultValue:'',
        validate: {
            len:  {
                isFloat: [3,255],
                msg:"Altura precisa ser um numero inteiro ou  ponto flutuante"
            }
     
        }
    },

    
})

module.exports = Aluno