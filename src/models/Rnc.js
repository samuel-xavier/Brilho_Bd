const { Model, DataTypes } = require('sequelize');

class Rnc extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            classif: DataTypes.STRING(30),
            dtemis: DataTypes.STRING(8),
            dscliente: DataTypes.STRING(60),
            produto: DataTypes.STRING(60),
            dsproblema: DataTypes.STRING(30),
        }, {
            sequelize,
            tableName: 'rnc'
        })
    }
}

module.exports = Rnc;