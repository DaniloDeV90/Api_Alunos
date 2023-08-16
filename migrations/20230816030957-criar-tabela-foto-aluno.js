'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('fotos', {


      id: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      filename: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      originalname: {
          type: Sequelize.STRING
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "alunos",
          key: 'id',

        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"

      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }



    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('fotos');

  }
};
