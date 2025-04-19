const { Model, DataTypes } = require('sequelize');

class Efi_producao extends Model {
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
            tableName: 'efi_producao'
        })
    }
}

module.exports = Efi_producao;