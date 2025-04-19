const { Model, DataTypes } = require('sequelize');

class Res_rnc extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            sequen: DataTypes.INTEGER,
            classif: DataTypes.STRING(30),
            qtde: DataTypes.FLOAT,
            perc: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'res_rnc'
        })
    }
}

module.exports = Res_rnc;