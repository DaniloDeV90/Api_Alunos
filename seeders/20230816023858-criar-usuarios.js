'use strict';
const bcryptjs = require ("bcryptjs")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) =>  {

      await queryInterface.bulkInsert('users', [
        
        {
        nome: 'Luis',
        email: "luiz123@gmail.com",
        password_hash:  await  bcryptjs.hash ("123456  ", 10),
        createdAt: new Date (),
        updatedAt:  new Date(),
        
      },
     {
      nome: 'Luis',
      email: "luiz1234@gmail.com",
      password_hash:  await bcryptjs.hash ("123456  ", 10),
      createdAt: new Date (),
      updatedAt:  new Date(),

   },
          
   {
    nome: 'Luis',
    email: "luiz12345@gmail.com",
    password_hash:  await bcryptjs.hash ("123456  ", 10),
    createdAt: new Date (),
    updatedAt:  new Date(),

 }
    ], {});

  },

  down: async  (queryInterface, Sequelize)  => {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
