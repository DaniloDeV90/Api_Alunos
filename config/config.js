require ("dotenv").config ();


module.exports = {
    host: "ep-ancient-breeze-539214.us-east-2.aws.neon.tech",
    dialect: "postgres",
    
    port:  5432,
    username: "DaniloDeV90",
    password:"IK3F5ohOucaj",
    database: "bd_Alunos",
    define: {
        timesStamps: true
    },
    dialectOptions: {
        connectTimeout: 60000,
        ssl: true,
        sslmode: "require"
      },
     
}




