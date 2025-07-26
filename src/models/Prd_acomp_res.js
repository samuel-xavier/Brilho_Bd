const { Model, DataTypes } = require('sequelize');

class Prd_acomp_res extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            ds_acomp: DataTypes.STRING(30),
            utldiprod: DataTypes.STRING(8),
            utldiacab: DataTypes.STRING(8),
            utldiemba: DataTypes.STRING(8),
        }, {
            sequelize,
            tableName: 'prd_acomp_res'
        })
    }
}

module.exports = Prd_acomp_res;