const { Model, DataTypes } = require('sequelize');

class Hsvda_periodo extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            per13: DataTypes.STRING(6),
            per12: DataTypes.STRING(6),
            per11: DataTypes.STRING(6),
            per10: DataTypes.STRING(6),
            per09: DataTypes.STRING(6),
            per08: DataTypes.STRING(6),
            per07: DataTypes.STRING(6),
            per06: DataTypes.STRING(6),
            per05: DataTypes.STRING(6),
            per04: DataTypes.STRING(6),
            per03: DataTypes.STRING(6),
            per02: DataTypes.STRING(6),
            per01: DataTypes.STRING(6),
        }, {
            sequelize,
            tableName: 'hsvda_periodo'
        })
    }
}

module.exports = Hsvda_periodo;