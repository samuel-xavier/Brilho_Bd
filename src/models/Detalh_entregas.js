const { Model, DataTypes } = require('sequelize');

class Detalh_entregas extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            classif: DataTypes.STRING(30),
            tipdoc: DataTypes.STRING(6),
            nrodoc: DataTypes.STRING(10),
            dscliente: DataTypes.STRING(60),
            dtemis: DataTypes.STRING(8),
            dtfatur: DataTypes.STRING(8),   
            vlrdoc: DataTypes.FLOAT,
            cid_dest: DataTypes.STRING(30),
            prazo_pad: DataTypes.INTEGER,
            dtprev: DataTypes.STRING(8),
            diasatraso: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'detalh_entregas'
        })
    }
}

module.exports = Detalh_entregas;