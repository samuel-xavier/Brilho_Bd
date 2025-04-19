const Sequelize = require('sequelize');
const connection = require('../database');

const Fatur_devol = require('../models/Fatur_devol');

module.exports = {
    async index(req, res) {
        const fatur_devol = await Fatur_devol.findAll();

        return res.json(fatur_devol);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT fatur_devol.id AS id, fatur_devol.cdempresa AS cdempresa, ';
        qry = qry +   'fatur_devol.classif AS classif, fatur_devol.tipdoc AS tipdoc, ';
        qry = qry +   'fatur_devol.nrodoc AS nrodoc, fatur_devol.dscliente AS dscliente, ';
        qry = qry +   'fatur_devol.dtpedido AS dtpedido, fatur_devol.dtfatur AS dtfatur, ';
        qry = qry +   'fatur_devol.vlrdoc AS vlrdoc, fatur_devol.diasatend AS diasatend ';
        qry = qry + 'FROM fatur_devol ';
        qry = qry + 'WHERE fatur_devol.cdempresa = "' + cdempresa + '"';

        const fatur_devol = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(fatur_devol);
    },

    async index_classif(req, res) { 

        const { cdempresa, classif } = req.params;

        var qry = '';
        qry = qry + 'SELECT fatur_devol.id AS id, fatur_devol.cdempresa AS cdempresa, ';
        qry = qry +   'fatur_devol.classif AS classif, fatur_devol.tipdoc AS tipdoc, ';
        qry = qry +   'fatur_devol.nrodoc AS nrodoc, fatur_devol.dscliente AS dscliente, ';
        qry = qry +   'fatur_devol.dtpedido AS dtpedido, fatur_devol.dtfatur AS dtfatur, ';
        qry = qry +   'fatur_devol.vlrdoc AS vlrdoc, fatur_devol.diasatend AS diasatend ';
        qry = qry + 'FROM fatur_devol ';
        qry = qry + 'WHERE fatur_devol.cdempresa = "' + cdempresa + '"';
        qry = qry + '  AND fatur_devol.classif = "' + classif + '"';

        const fatur_devol = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(fatur_devol);
    }


};