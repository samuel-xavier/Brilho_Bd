const { Model, DataTypes } = require('sequelize');

class Hsvda_marcas extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            marca: DataTypes.STRING(30),
            fattot: DataTypes.STRING(6),
            fatp13: DataTypes.STRING(6),
            fatp12: DataTypes.STRING(6),
            fatp11: DataTypes.STRING(6),
            fatp10: DataTypes.STRING(6),
            fatp09: DataTypes.STRING(6),
            fatp08: DataTypes.STRING(6),
            fatp07: DataTypes.STRING(6),
            fatp06: DataTypes.STRING(6),
            fatp05: DataTypes.STRING(6),
            fatp04: DataTypes.STRING(6),
            fatp03: DataTypes.STRING(6),
            fatp02: DataTypes.STRING(6),
            fatp01: DataTypes.STRING(6),
        }, {
            sequelize,
            tableName: 'hsvda_marcas'
        })
    }
}

module.exports = Hsvda_marcas;