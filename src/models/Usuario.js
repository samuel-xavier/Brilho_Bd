const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            nome: DataTypes.STRING(60),
            email: DataTypes.STRING(100),
            senha: DataTypes.STRING(10),
        }, {
            sequelize,
            tableName: 'usuarios'
        })
    }
}

module.exports = Usuario;