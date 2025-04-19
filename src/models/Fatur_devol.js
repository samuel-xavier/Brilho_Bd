const { Model, DataTypes, STRING } = require('sequelize');

class Fatur_devol extends Model {
    static init(sequelize) {
        super.init({
            cdempresa: DataTypes.STRING(6),
            classif: DataTypes.STRING(30),
            tipdoc: DataTypes.STRING(6),
            nrodoc: DataTypes.STRING(10),
            dscliente: DataTypes.STRING(60),
            dtpedido: DataTypes.STRING(8),
            dtfatur: DataTypes.STRING(8),
            vlrdoc: DataTypes.FLOAT,
            diasatend: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'fatur_devol'
        })
    }
}

module.exports = Fatur_devol;