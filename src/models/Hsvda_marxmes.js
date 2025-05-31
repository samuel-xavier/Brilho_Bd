const { Model, DataTypes } = require('sequelize');

class Hsvda_marxmes extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            marca: DataTypes.STRING(30),
            anomes: DataTypes.STRING(6),
            vlfat: DataTypes.STRING(6),
        }, {
            sequelize,
            tableName: 'hsvda_marxmes'
        })
    }
}

module.exports = Hsvda_marxmes;