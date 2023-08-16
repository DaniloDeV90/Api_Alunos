const Aluno = require ("../models/Aluno")
const Foto = require ("../models/Fotos")
Foto.belongsTo (Aluno, {foreignKey: "aluno_id"});
Aluno.hasMany (Foto, {foreignKey: "aluno_id"})
module.exports = {Foto,Aluno}