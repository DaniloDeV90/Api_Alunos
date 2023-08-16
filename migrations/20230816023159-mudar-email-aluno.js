'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.changeColumn('alunos','email', {
        
        type: Sequelize.STRING,
         alloeNull: false,  
         unique: true
     });
     
  },
  
  async down (queryInterface, Sequelize) {
   
    await queryInterface.changeColumn('alunos', 'email', {
      type: Sequelize.STRING
    });
  
  }
};
