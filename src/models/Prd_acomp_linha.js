const { Model, DataTypes } = require('sequelize');

class Prd_acomp_linha extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            ds_setor: DataTypes.STRING(30),
            ds_linha: DataTypes.STRING(30),
            qt_prog: DataTypes.FLOAT,
            qt_produz: DataTypes.FLOAT,
            qt_pend: DataTypes.FLOAT,
            qt_dias: DataTypes.FLOAT,
            qt_proddia: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'prd_acomp_linha'
        })
    }
}

module.exports = Prd_acomp_linha;