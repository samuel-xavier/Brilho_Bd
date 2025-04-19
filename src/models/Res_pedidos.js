const { Model, DataTypes } = require('sequelize');

class Res_pedidos extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            sequen: DataTypes.INTEGER,
            classif: DataTypes.STRING(30),
            qtde: DataTypes.FLOAT,
            valor: DataTypes.FLOAT,
            perc: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'res_pedidos'
        })
    }
}

module.exports = Res_pedidos;