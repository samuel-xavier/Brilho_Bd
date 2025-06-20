const { Model, DataTypes } = require('sequelize');

class Res_pedfutur extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            anomes: DataTypes.STRING(6),
            valor: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'res_pedfutur'
        })
    }
}

module.exports = Res_pedfutur;