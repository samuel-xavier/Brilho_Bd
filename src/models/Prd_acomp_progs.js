const { Model, DataTypes } = require('sequelize');

class Prd_acomp_progs extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            cd_prog: DataTypes.STRING(6),
            ds_prog: DataTypes.STRING(30),
        }, {
            sequelize,
            tableName: 'prd_acomp_progs'
        })
    }
}

module.exports = Prd_acomp_progs;