const { Model, DataTypes, INTEGER } = require('sequelize');

class Ped_pend extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            classif: DataTypes.STRING(30),
            tippend: DataTypes.STRING(10),
            nroped: DataTypes.STRING(10),
            dscliente: DataTypes.STRING(60),
            dtemis: DataTypes.STRING(8),
            progrprodu: DataTypes.STRING(10),
            mesprogr: DataTypes.STRING(10),
            diaspend: INTEGER,
            dtexped: DataTypes.STRING(8),
            valor: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'ped_pend'
        })
    }
}

module.exports = Ped_pend;