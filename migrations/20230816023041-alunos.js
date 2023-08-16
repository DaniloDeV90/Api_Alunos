'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('alunos', { 
        id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        nome: {
           type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
       
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
      
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      
      });
   
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('alunos');
  
  }
};
