const { Model, DataTypes } = require('sequelize');

class Res_vdas extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            meta_mes: DataTypes.FLOAT,
            fatacu: DataTypes.FLOAT,
            devacu: DataTypes.FLOAT,
            efi_fatu: DataTypes.FLOAT,
            pend_prod: DataTypes.FLOAT,
            pend_mes: DataTypes.FLOAT,
            pend_fut: DataTypes.FLOAT,
            efi_presu: DataTypes.FLOAT,
            dthr_atu: DataTypes.STRING(20),
        }, {
            sequelize,
            tableName: 'res_vdas'
        })
    }
}

module.exports = Res_vdas;