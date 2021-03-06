// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Produto = sequelize.define("produto", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    descrição: {
        allowNull: false,
        type: Sequelize.STRING(250),
        validate: {
            len: [1, 100]
        }
    },
    preço: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    quantidadeEmEstoque: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    }
});
 
module.exports = Produto;