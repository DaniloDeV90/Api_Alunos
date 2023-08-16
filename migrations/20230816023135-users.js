'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {


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

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

      },
      password_hash: {
       type: Sequelize.STRING,
       allowNull: true
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

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');

  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {


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

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

      },
      password_hash: {
       type: Sequelize.STRING,
       allowNull: true
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

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');

  }
};
